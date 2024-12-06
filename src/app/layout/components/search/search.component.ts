import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from '../../../services/shared/loading.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  id:string='';
  constructor(private router:Router,private loadingService:LoadingService){}
  ngOnInit(): void {

  }
  onSearch(){
    if(this.id){
      this.router.navigateByUrl(`user/${+this.id}`)
    }
    else{
      this.router.navigateByUrl(`users`)
    }
    this.loadingService.loading.next(true);
  }
}
