
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {
  requests: any[] = [];
  filteredRequests: any[] = [];
  selectedStatus = 'ALL';
  loading = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadRequests();
  }

  loadRequests(): void {
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getServiceRequests().subscribe({
      next: (response: any) => {
        this.requests = Array.isArray(response)
          ? response
          : Array.isArray(response?.content)
            ? response.content
            : [];

        this.applyFilter();
        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to load requests:', error);
        this.errorMessage =
          'Unable to load service requests. Check backend and authentication.';
        this.loading = false;
      }
    });
  }

  applyFilter(): void {
    this.filteredRequests = this.selectedStatus === 'ALL'
      ? this.requests
      : this.requests.filter(request =>
          String(request.status || '').toUpperCase() ===
          this.selectedStatus
        );
  }
}
