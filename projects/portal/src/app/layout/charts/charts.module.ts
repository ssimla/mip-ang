import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';

import { ChartsComponent } from './charts.component';
import { ChartsRoutingModule } from './charts-routing.module';
import { LoadingSpinnerModule } from '../../shared';


@NgModule({
  declarations: [ChartsComponent],
  imports: [
    CommonModule,
    Ng2Charts,
    ChartsRoutingModule,
    LoadingSpinnerModule
  ]
})
export class ChartsModule { }
