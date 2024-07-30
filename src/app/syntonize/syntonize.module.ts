import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StationComponent } from './components/station/station.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    StationComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HomeComponent
  ]
})
export class SyntonizeModule { }
