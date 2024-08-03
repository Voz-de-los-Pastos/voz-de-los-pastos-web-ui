import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './syntonize/pages/home/home.component';
import { AboutPageComponent } from './syntonize/pages/about-page/about-page.component';
import { ServicePageComponent } from './syntonize/pages/service-page/service-page.component';
import { IntroPageComponent } from './syntonize/pages/intro-page/intro-page.component';
import { ContactPageComponent } from './syntonize/pages/contact-page/contact-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'service',
    component: ServicePageComponent
  },
  {
    path: 'intro',
    component: IntroPageComponent
  },
  {
    path: 'contact',
    component: ContactPageComponent
  },
  {
    path: '**',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
