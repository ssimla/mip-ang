import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    NgbAlertModule,
    DashboardRoutingModule,
    StatModule
  ]
})
export class DashboardModule { }
