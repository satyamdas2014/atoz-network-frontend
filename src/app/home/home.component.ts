
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  customer = {
    name: '',
    mobile: '',
    email: '',
    connectionType: '',
    address: '',
    plan: '',
    message: ''
  };

  loading = false;
  successMessage = '';
  errorMessage = '';

  constructor(private http: HttpClient) {}

  submitEnquiry(): void {
    if (this.loading) {
      return;
    }

    this.loading = true;
    this.successMessage = '';
    this.errorMessage = '';

    this.http.post('https://atoz-network-services.onrender.com/api/enquiries', this.customer)
      .subscribe({
        next: (response: any) => {
          this.successMessage =
            response?.message || 'Your enquiry has been submitted successfully.';

          this.customer = {
            name: '',
            mobile: '',
            email: '',
            connectionType: '',
            address: '',
            plan: '',
            message: ''
          };

          this.loading = false;
        },
        error: (error) => {
          console.error('Enquiry submission failed:', error);

          this.errorMessage =
            'Unable to submit your enquiry. Please try again later.';

          this.loading = false;
        }
      });
  }


  
serviceRequest = {
  name: '',
  mobile: '',
  requestType: '',
  address: '',
  description: ''
};

complaint = {
  name: '',
  mobile: '',
  category: '',
  address: '',
  description: ''
};

requestLoading = false;
requestSuccess = '';
requestError = '';

complaintLoading = false;
complaintSuccess = '';
complaintError = '';


submitServiceRequest(form: any): void {
  if (form.invalid || this.requestLoading) {
    return;
  }

  this.requestLoading = true;
  this.requestSuccess = '';
  this.requestError = '';

  this.http.post(
    'https://atoz-network-services.onrender.com/api/service-requests',
    this.serviceRequest
  ).subscribe({
    next: (response: any) => {
      this.requestSuccess =
        response?.message || 'Your service request has been submitted successfully.';

      this.serviceRequest = {
        name: '',
        mobile: '',
        requestType: '',
        address: '',
        description: ''
      };

      form.resetForm();
      this.requestLoading = false;
    },
   error: (error) => {
  console.error('Service Request Error:', error);
  console.error('HTTP Status:', error.status);
  console.error('Backend Response:', error.error);

  this.requestError =
    error.error?.message ||
    'Unable to submit your request. Please try again later.';

  this.requestLoading = false;
}
  });
}

submitComplaint(form: any): void {
  if (form.invalid || this.complaintLoading) {
    return;
  }

  this.complaintLoading = true;
  this.complaintSuccess = '';
  this.complaintError = '';

  const complaintPayload = {
  name: this.complaint.name,
  mobile: this.complaint.mobile,
  subject: this.complaint.category,
  address: this.complaint.address,
  description: this.complaint.description
};

this.http.post(
  'https://atoz-network-services.onrender.com/api/complaints',
  complaintPayload
).subscribe({
    next: (response: any) => {
      this.complaintSuccess =
        response?.message || 'Your complaint has been submitted successfully.';

      this.complaint = {
        name: '',
        mobile: '',
        category: '',
        address: '',
        description: ''
      };

      form.resetForm();
      this.complaintLoading = false;
    },
   error: (error) => {
  console.error('Complaint Error:', error);
  console.error('HTTP Status:', error.status);
  console.error('Backend Response:', error.error);
 
  this.complaintError =
    error.error?.message ||
    'Unable to submit your complaint. Please try again later.';

  this.complaintLoading = false;
}
  });
}

}
  