import { Component, OnInit } from '@angular/core';
import { Slide } from '../my-carousel/my-carousel.component'

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  travertineSlides: Slide[];
  marbleSlides: Slide[];
  terrazzoSlides: Slide[];
  otherSlides: Slide[];
  constructor() {
    this.travertineSlides = [
      {url: '../../../assets/images/Travertine/Travertine1.jpg'},
      {url: '../../../assets/images/Travertine/Travertine2.jpg'},
      {url: '../../../assets/images/Travertine/Travertine3.jpg'},
      {url: '../../../assets/images/Travertine/Travertine4.jpg'},
      {url: '../../../assets/images/Travertine/Travertine5.jpg'},
      {url: '../../../assets/images/Travertine/Travertine6.jpg'},
      {url: '../../../assets/images/Travertine/Travertine7.jpg'},
      {url: '../../../assets/images/Travertine/Travertine8.jpg'},
      {url: '../../../assets/images/Travertine/Travertine9.jpg'},
      {url: '../../../assets/images/Travertine/Travertine10.jpg'},
      {url: '../../../assets/images/Travertine/Travertine11.jpg'},
      {url: '../../../assets/images/Travertine/Travertine12.jpg'},
      {url: '../../../assets/images/Travertine/Travertine13.jpg'}
    ];
    this.marbleSlides = [
      {url: '../../../assets/images/Marble/Marble1.jpg'},
      {url: '../../../assets/images/Marble/Marble2.jpg'},
      {url: '../../../assets/images/Marble/Marble3.jpg'},
      {url: '../../../assets/images/Marble/Marble4.jpg'},
      {url: '../../../assets/images/Marble/Marble5.jpg'},
      {url: '../../../assets/images/Marble/Marble6.jpg'},
      {url: '../../../assets/images/Marble/Marble7.jpg'},
      {url: '../../../assets/images/Marble/Marble8.jpg'},
      {url: '../../../assets/images/Marble/Marble9.jpg'},
      {url: '../../../assets/images/Marble/Marble10.jpg'},
      {url: '../../../assets/images/Marble/Marble11.jpg'},
      {url: '../../../assets/images/Marble/Marble12.jpg'},
      {url: '../../../assets/images/Marble/Marble13.jpg'}
    ];
    this.terrazzoSlides = [
      {url: '../../../assets/images/Terrazzo/Terrazzo1.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo2.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo3.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo4.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo5.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo6.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo7.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo8.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo9.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo10.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo11.jpg'},
      {url: '../../../assets/images/Terrazzo/Terrazzo12.jpg'}
    ];
    this.otherSlides = [
      {url: '../../../assets/images/Other/Other1.jpg'},
      {url: '../../../assets/images/Other/Other2.jpg'},
      {url: '../../../assets/images/Other/Other3.jpg'},
      {url: '../../../assets/images/Other/Other4.jpg'},
      {url: '../../../assets/images/Other/Other5.jpg'},
      {url: '../../../assets/images/Other/Other6.jpg'},
      {url: '../../../assets/images/Other/Other7.jpg'},
      {url: '../../../assets/images/Other/Other8.jpg'},
      {url: '../../../assets/images/Other/Other9.jpg'},
      {url: '../../../assets/images/Other/Other10.jpg'},
      {url: '../../../assets/images/Other/Other11.jpg'},
      {url: '../../../assets/images/Other/Other12.jpg'},
    ];
  }

  ngOnInit() {
  }

}
