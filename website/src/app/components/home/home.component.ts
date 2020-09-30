import { Component, OnInit } from '@angular/core';
import { Slide } from '../my-carousel/my-carousel.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  slides: Slide[];

  constructor() {
    this.slides = [
      {url: '../../../assets/images/_Example1/E1_2.jpg'},
      {url: '../../../assets/images/_Example1/E1_8.jpg'},
      {url: '../../../assets/images/_Example2/E2_5.jpg'}
      /*{url: '../../../assets/images/_Example2/E2_1.jpg'},
      {url: '../../../assets/images/_Example2/E2_7.jpg'}*/
    ];
  }

  ngOnInit() {
  }

}
