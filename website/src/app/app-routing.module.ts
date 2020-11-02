import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutOutMagicComponent } from './components/about-out-magic/about-out-magic.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'AboutOurMagic', component: AboutOutMagicComponent},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
