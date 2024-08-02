import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './components/station/station.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';
import { IntroPageComponent } from './pages/intro-page/intro-page.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    StationComponent,
    HomeComponent,
    AboutPageComponent,
    ServicePageComponent,
    IntroPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HomeComponent,
    AboutPageComponent,
    ServicePageComponent,
    IntroPageComponent
  ]
})
export class SyntonizeModule { }
