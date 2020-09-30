import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  showMore = false;
  constructor() { }

  ngOnInit() {
    window.addEventListener('scroll', () => {

      const headerNavbar = document.getElementById('headerNavbar');
      const stickNavbar = document.getElementById('stickNavbar');
      let distanceToTop = stickNavbar.getBoundingClientRect().top;
      let distanceToBottom = headerNavbar.getBoundingClientRect().bottom;

      if (distanceToTop <= 0) {
        stickNavbar.classList.add('fixed-top');
        this.showMore = true;
      }

      if (distanceToBottom > 80) {
        stickNavbar.classList.remove('fixed-top');
        this.showMore = false;
      }
   });

  }

}
