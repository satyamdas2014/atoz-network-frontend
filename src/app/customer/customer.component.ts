import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../services/customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customers: any[] = [];

  loading = false;
  errorMessage = '';
  searchName = '';

  constructor(
    private customerService: CustomerService
  ) {}

  ngOnInit(): void {
    this.loadCustomers();
  }

  loadCustomers(): void {

    this.loading = true;
    this.errorMessage = '';

    this.customerService.getCustomers().subscribe({

      next: (response) => {

        this.customers = response;

        this.loading = false;

        console.log('Customers:', response);
      },

      error: (error) => {

        console.error('Error loading customers:', error);

        this.errorMessage =
          'Unable to load customers.';

        this.loading = false;
      }

    });
  }

  searchCustomers(): void {

    this.loading = true;
    this.errorMessage = '';

    this.customerService.searchCustomers(
      this.searchName
    ).subscribe({

      next: (response) => {

        this.customers = response.content || [];

        this.loading = false;
      },

      error: (error) => {

        console.error('Customer search failed:', error);

        this.errorMessage =
          'Unable to search customers.';

        this.loading = false;
      }

    });
  }

  clearSearch(): void {

    this.searchName = '';

    this.loadCustomers();
  }

  deleteCustomer(id: number): void {

    const confirmed = confirm(
      'Are you sure you want to delete this customer?'
    );

    if (!confirmed) {
      return;
    }

    this.customerService.deleteCustomer(id).subscribe({

      next: () => {

        alert('Customer deleted successfully.');

        this.loadCustomers();
      },

      error: (error) => {

        console.error(
          'Delete customer failed:',
          error
        );

        alert(
          'Unable to delete customer.'
        );
      }

    });
  }

}