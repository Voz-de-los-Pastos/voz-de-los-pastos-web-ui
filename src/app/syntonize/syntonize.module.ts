import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './components/station/station.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicePageComponent } from './pages/service-page/service-page.component';



@NgModule({
  declarations: [
    StationComponent,
    HomeComponent,
    AboutPageComponent,
    ServicePageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent,
    AboutPageComponent,
    ServicePageComponent
  ]
})
export class SyntonizeModule { }
