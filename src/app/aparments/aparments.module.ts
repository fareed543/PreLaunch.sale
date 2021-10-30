import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AparmentsComponent } from './aparments.component';
import { AparmentListComponent } from './aparment-list/aparment-list.component';
import { AparmentDetailsComponent } from './aparment-details/aparment-details.component';



@NgModule({
  declarations: [
    AparmentsComponent,
    AparmentListComponent,
    AparmentDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AparmentsModule { }
