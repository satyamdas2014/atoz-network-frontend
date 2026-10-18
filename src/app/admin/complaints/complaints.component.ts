
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-complaints',
  templateUrl: './complaints.component.html',
  styleUrls: ['./complaints.component.css']
})
export class ComplaintsComponent implements OnInit {
  complaints: any[] = [];
  filteredComplaints: any[] = [];
  selectedStatus = 'ALL';
  loading = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadComplaints();
  }

  loadComplaints(): void {
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getComplaints().subscribe({
      next: (response: any) => {
        this.complaints = Array.isArray(response)
          ? response
          : Array.isArray(response?.content)
            ? response.content
            : [];

        this.applyFilter();
        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to load complaints:', error);
        this.errorMessage =
          'Unable to load complaints. Check backend and authentication.';
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    this.filteredComplaints = this.selectedStatus === 'ALL'
      ? this.complaints
      : this.complaints.filter(complaint =>
          String(complaint.status || '').toUpperCase() ===
          this.selectedStatus
        );
  }
}
