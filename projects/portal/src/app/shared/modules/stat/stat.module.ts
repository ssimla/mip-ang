import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatComponent } from './stat.component';
import { LoadingSpinnerModule } from '../loading-spinner/loading-spinner.module';

@NgModule({
  declarations: [StatComponent],
  imports: [
    CommonModule,
    LoadingSpinnerModule
  ],
  exports: [StatComponent]
})
export class StatModule { }
