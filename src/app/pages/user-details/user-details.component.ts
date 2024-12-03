import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tcard } from 'src/app/models/card';
import { user } from 'src/app/models/user';
import { CachService } from 'src/app/services/cach/cach.service';
import { LoadingService } from 'src/app/services/shared/loading.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit{
  id:number=0
  userCard:Tcard={
    title: '',
    body: '',
    image: '',
    subtitle: ''
  };
  errorMessage:string='';
  constructor(private route:ActivatedRoute,private userService:UserService,private router:Router,private loadingService:LoadingService,private cacheService:CachService){
    this.id=+(route.snapshot.paramMap.get("id")??0)
  }
  ngOnInit(): void {    
    this.getUserData()
    this.cacheService.cache.subscribe(res=>{
      if(res){
        this.userCard={
          body:"",
          image:res.data.avatar,
          subtitle:res.data.email,
          title:`${res.data.first_name} ${res.data.last_name}`
        };
        this.loadingService.loading.next(false);
      }
    })

  }
  getUserData(){
    if(!this.cacheService.isPublishData(`user-${this.id}`)){
   const subscriber= this.userService.getById(this.id).subscribe({
      next:res=>{
        this.cacheService.set(`user-${this.id}`,res);
        subscriber.unsubscribe();
      },
      error:err=>{
        this.errorMessage='not found'
        this.loadingService.loading.next(false);
      }
    });}
  }
  goBack(){
    this.loadingService.loading.next(true);
    this.router.navigateByUrl('/users')
  }
}
