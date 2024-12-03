import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/shared/loading.service';

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
    this.loadingService.loading.next(true);
    this.router.navigateByUrl(`user/${+this.id}`)
  }
}
