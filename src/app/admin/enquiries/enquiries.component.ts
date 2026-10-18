import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-enquiries',
  templateUrl: './enquiries.component.html',
  styleUrls: ['./enquiries.component.css']
})
export class EnquiriesComponent implements OnInit {

  enquiries: any[] = [];

  loading = false;

  errorMessage = '';

  constructor(
    private apiService: ApiService
  ) {}

  ngOnInit(): void {

    this.loadEnquiries();

  }

  loadEnquiries(): void {

    this.loading = true;
    this.errorMessage = '';

    this.apiService.getEnquiries().subscribe({

      next: (data: any) => {
  console.log('Enquiries API response:', data);

  this.enquiries = Array.isArray(data)
    ? data
    : Array.isArray(data?.content)
      ? data.content
      : [];

  this.loading = false;
},

      error: (error) => {

        console.error('Failed to load enquiries:', error);

        this.errorMessage =
          'Unable to load enquiries. Please check admin authentication and backend.';

        this.loading = false;
      }

    });
  }


  updateStatus(
    id: number,
    status: string
  ): void {

    this.apiService
      .updateEnquiryStatus(id, status)
      .subscribe({

        next: (updatedEnquiry) => {

          console.log(
            'Enquiry updated:',
            updatedEnquiry
          );

          this.loadEnquiries();

        },

        error: (error) => {

          console.error(
            'Status update failed:',
            error
          );

          alert(
            'Unable to update enquiry status.'
          );

        }

      });
  }

}