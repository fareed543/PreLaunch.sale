import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentsComponent } from './apartments.component';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsListComponent } from './apartments-list/apartments-list.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: ApartmentsComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo : 'list'
      },
      {
        path: 'list',
        component: ApartmentsListComponent,
        // pathMatch: 'full'
      },
      {
        path: 'details',
        component: ApartmentDetailsComponent
      }
    ]
  }
]

@NgModule({
  declarations: [
    ApartmentsComponent,
    ApartmentsListComponent,
    ApartmentDetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ApartmentsModule { }
