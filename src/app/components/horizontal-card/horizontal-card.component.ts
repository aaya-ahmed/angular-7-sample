import { Component, Input } from '@angular/core';
import { Tcard } from '../../models/card';
import {  Router } from '@angular/router';
import { LoadingService } from 'src/app/services/shared/loading.service';


@Component({
  selector: 'app-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss']
})
export class HorizontalCardComponent {
  @Input()card : Tcard={
    title: '',
    subtitle: '',
    body: '',
    image: ''
  };
  @Input()goBackUrl:string='';
  constructor(
    private router: Router,
    private loadingService: LoadingService,
  ) {
  }
  goBack(): void {
    if(this.goBackUrl){

      this.loadingService.loading.next(true);
      this.router.navigateByUrl(this.goBackUrl);
    }
  }
}
