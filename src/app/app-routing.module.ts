
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { EnquiriesComponent } from './admin/enquiries/enquiries.component';
import { PlansComponent } from './admin/plans/plans.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { ComplaintsComponent } from './admin/complaints/complaints.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: DashboardComponent },
  { path: 'admin/customers', component: CustomersComponent },
  { path: 'admin/enquiries', component: EnquiriesComponent },
  { path: 'admin/plans', component: PlansComponent },
  { path: 'admin/requests', component: RequestsComponent },
  { path: 'admin/complaints', component: ComplaintsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
