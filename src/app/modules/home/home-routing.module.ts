import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { HomeMenuComponent } from './components/home-menu/home-menu.component';

const homeRoutes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    children: [
      { path: 'menu', component: HomeMenuComponent },
      { path: '**', redirectTo: '/home', pathMatch: 'full'}
    ]
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(homeRoutes)
  ],
  exports: []
})
export class HomeRoutingModule { }
export const homeRouting: ModuleWithProviders = RouterModule.forChild(homeRoutes);
