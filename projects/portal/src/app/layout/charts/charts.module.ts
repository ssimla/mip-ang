import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';


@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    Ng2Charts,
    ChartsRoutingModule
  ]
})
export class ChartsModule { }
