import { Component, Input } from '@angular/core';
import { Tcard } from 'src/app/models/card';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent {
  @Input()card:Tcard={
    title: '',
    subtitle: '',
    body: '',
    image: ''
  };
  

}
