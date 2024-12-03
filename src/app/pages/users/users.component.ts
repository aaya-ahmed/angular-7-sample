import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { usersListResponce } from 'src/app/models/user';
import { CachService } from 'src/app/services/cach/cach.service';
import { LoadingService } from 'src/app/services/shared/loading.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:usersListResponce={
    data:[],
    page:1,
    per_page:0,
    total:0,
    total_pages:0
  };
  constructor(private userService:UserService,private router:Router,private loadingService:LoadingService,private cacheService:CachService){}
  ngOnInit(): void {
    this.getUsers(1);
    this.cacheService.cache.subscribe(res=>{
      if(res){
        this.users=res
        this.loadingService.loading.next(false);
      }
    })

  }
  getUsers(pageNumber:number){
    if(!this.cacheService.isPublishData(`users-list-${pageNumber}`)){
      const subscriber=this.userService.getPaged(pageNumber).subscribe({
        next:(res:usersListResponce)=>{
          this.cacheService.set(`users-list-${pageNumber}`,res);
          subscriber.unsubscribe();
        },
        error:(err)=> {
          this.loadingService.loading.next(false);
          subscriber.unsubscribe();
        },
      })
    }
  }

  goToDetails(id:number){
    this.loadingService.loading.next(true);
    this.router.navigateByUrl(`user/${id}`)
  }
}
