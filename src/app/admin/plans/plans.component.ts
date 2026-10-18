
import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-plans',
  templateUrl: './plans.component.html',
  styleUrls: ['./plans.component.css']
})
export class PlansComponent implements OnInit {
  plans: any[] = [];
  loading = false;
  errorMessage = '';

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.loadPlans();
  }

  loadPlans(): void {
    this.loading = true;
    this.errorMessage = '';

    this.apiService.getPlans().subscribe({
      next: (response: any) => {
        this.plans = Array.isArray(response)
          ? response
          : Array.isArray(response?.content)
            ? response.content
            : [];

        this.loading = false;
      },
      error: (error) => {
        console.error('Failed to load plans:', error);
        this.errorMessage =
          'Unable to load plans. Check backend and authentication.';
        this.loading = false;
      }
    });
  }

  deletePlan(id: number): void {
    if (!confirm('Are you sure you want to delete this plan?')) {
      return;
    }

    this.apiService.deletePlan(id).subscribe({
      next: () => {
        alert('Plan deleted successfully.');
        this.loadPlans();
      },
      error: (error) => {
        console.error('Failed to delete plan:', error);
        alert('Unable to delete plan.');
      }
    });
  }
}
