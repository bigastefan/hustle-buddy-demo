import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { homeRouting } from './home-routing.module';
import { HomePageComponent } from './home-page.component';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';



@NgModule({
  declarations: [
    HomePageComponent,
    HomeMenuComponent
  ],
  imports: [
    CommonModule,
    homeRouting
  ],
  exports: [
    HomePageComponent
  ]
})
export class HomeModule { }
