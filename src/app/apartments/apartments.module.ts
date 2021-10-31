import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApartmentsComponent } from './apartments.component';
import { RouterModule, Routes } from '@angular/router';
import { ApartmentsListComponent } from './apartments-list/apartments-list.component';
import { ApartmentDetailsComponent } from './apartment-details/apartment-details.component';
import { SharedModule } from '../shared/shared.module';
import { SuprimeComponent } from './suprime/suprime.component';
import { MyfairSunriseComponent } from './myfair-sunrise/myfair-sunrise.component';
import { LukasCountyComponent } from './lukas-county/lukas-county.component';

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
      },


      {
        path: 'lukas-county-hyderabad-telangana',
        component: LukasCountyComponent
      },

      {
        path: 'myfair-sunrise-villas',
        component: MyfairSunriseComponent
      },

      {
        path: 'suprime-hyderabad',
        component: SuprimeComponent
      }

    ]
  }
]

@NgModule({
  declarations: [
    ApartmentsComponent,
    ApartmentsListComponent,
    ApartmentDetailsComponent,
    SuprimeComponent,
    MyfairSunriseComponent,
    LukasCountyComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ApartmentsModule { }
