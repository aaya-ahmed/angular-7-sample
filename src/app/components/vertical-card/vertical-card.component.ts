import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Tcard } from '../../models/card';

@Component({
  selector: 'app-vertical-card',
  templateUrl: './vertical-card.component.html',
  styleUrls: ['./vertical-card.component.scss']
})
export class VerticalCardComponent  {
  color: string = '';

  @Input() card: Tcard = {
    id: 0,
    title: '',
    subtitle: '',
    body: '',
    image: ''
  };
}
