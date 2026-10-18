
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { EnquiriesComponent } from './admin/enquiries/enquiries.component';
import { CustomersComponent } from './admin/customers/customers.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { PlansComponent } from './admin/plans/plans.component';
import { RequestsComponent } from './admin/requests/requests.component';
import { ComplaintsComponent } from './admin/complaints/complaints.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    EnquiriesComponent,
    CustomersComponent,
    DashboardComponent,
    HomeComponent,
    PlansComponent,
    RequestsComponent,
    ComplaintsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
