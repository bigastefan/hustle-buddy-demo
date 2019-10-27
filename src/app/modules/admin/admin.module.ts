import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPageComponent } from './admin-page.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';
import { adminRouting } from './admin-routing.module';



@NgModule({
  declarations: [
    AdminPageComponent,
    AdminMenuComponent
  ],
  imports: [
    CommonModule,
    adminRouting
  ],
  exports: [
    AdminPageComponent
  ]
})
export class AdminModule { }
