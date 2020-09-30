import { Component, OnInit, Input } from '@angular/core';

export interface Slide {
  url: string;
}

@Component({
  selector: 'app-my-carousel',
  templateUrl: './my-carousel.component.html',
  styleUrls: ['./my-carousel.component.scss']
})

export class MyCarouselComponent implements OnInit {
  cIndex: any;
  @Input() slides: Slide[];
  constructor() { }

  ngOnInit() {
    console.log(this.slides);
  }

}
