import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RaportsRoutingModule } from './raports-routing.module';
import { RaportsComponent } from './raports.component';


@NgModule({
  declarations: [RaportsComponent],
  imports: [
    CommonModule,
    RaportsRoutingModule
  ]
})
export class RaportsModule { }
