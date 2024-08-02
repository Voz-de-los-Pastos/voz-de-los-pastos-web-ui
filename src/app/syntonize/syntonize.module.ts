import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './components/station/station.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { RouterModule } from '@angular/router';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';



@NgModule({
  declarations: [
    StationComponent,
    HomeComponent,
    AboutPageComponent,
    ServicePageComponent,
    IntroPageComponent,
    ContactPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    AboutPageComponent,
    ServicePageComponent,
    IntroPageComponent,
    ContactPageComponent
  ]
})
export class SyntonizeModule { }
