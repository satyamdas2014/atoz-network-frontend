
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Firstapp';

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

  // Spring Boot Enquiry API
  private apiUrl = 'http://localhost:8081/api/enquiries';

  constructor(private http: HttpClient) {}

  submitEnquiry(): void {

    this.successMessage = '';
    this.errorMessage = '';

    if (
      !this.customer.name.trim() ||
      !/^[0-9]{10}$/.test(this.customer.mobile) ||
      !this.customer.connectionType ||
      !this.customer.address.trim() ||
      !this.customer.plan
    ) {
      this.errorMessage =
        'Please enter valid name, 10-digit mobile, connection type, address and plan.';
      return;
    }

    this.loading = true;

    this.http.post(this.apiUrl, this.customer).subscribe({
      next: (response) => {
        this.successMessage =
          'Your enquiry has been submitted successfully!';

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
          'Unable to submit enquiry. Please check the backend server and try again.';

        this.loading = false;
      }
    });
  }
}
