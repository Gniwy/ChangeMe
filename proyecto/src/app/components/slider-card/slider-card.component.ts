import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slider-card',
  templateUrl: './slider-card.component.html',
  styleUrls: ['./slider-card.component.scss']
})
export class SliderCardComponent implements OnInit {

  @Input() tipo : string = ''
  @Input() dato : any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
