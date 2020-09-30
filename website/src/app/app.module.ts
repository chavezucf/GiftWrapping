import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesOfferedComponent } from './components/services-offered/services-offered.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CareTipsComponent } from './components/care-tips/care-tips.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MyCarouselComponent } from './components/my-carousel/my-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    ServicesOfferedComponent,
    GalleryComponent,
    CareTipsComponent,
    ContactUsComponent,
    MyCarouselComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
