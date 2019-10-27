import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { AdminMenuComponent } from './components/admin-menu/admin-menu.component';

const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      { path: 'menu', component: AdminMenuComponent },
      { path: '**', redirectTo: '/admin', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: []
})
export class AdminRoutingModule { }
export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
