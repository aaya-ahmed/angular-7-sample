import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tcard } from 'src/app/models/card';

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
}
