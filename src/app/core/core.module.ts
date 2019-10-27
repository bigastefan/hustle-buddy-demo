import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HomeModule } from '../modules/home/home.module';
import { NgxsModule } from '@ngxs/store';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    HomeModule,
    NgxsModule.forRoot([

    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ]
})
export class CoreModule { }
