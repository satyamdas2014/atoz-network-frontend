import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // =========================
  // ADMIN AUTH
  // =========================

 private getAuthHeaders(): HttpHeaders {
  return new HttpHeaders({
    'Content-Type': 'application/json'
  });
}

  // =========================
  // ENQUIRIES
  // =========================

  getEnquiries(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/enquiries`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  getEnquiryById(id: number): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/enquiries/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  updateEnquiryStatus(
    id: number,
    status: string
  ): Observable<any> {

    return this.http.put<any>(
      `${this.baseUrl}/enquiries/${id}/status`,
      {
        status: status
      },
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  getEnquiriesByStatus(
    status: string
  ): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/enquiries/status/${status}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }


  // =========================
  // CUSTOMERS
  // =========================

  getCustomers(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/customers`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  getCustomerById(id: number): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/customers/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  updateCustomer(
    id: number,
    customer: any
  ): Observable<any> {

    return this.http.put<any>(
      `${this.baseUrl}/customers/${id}`,
      customer,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  deleteCustomer(id: number): Observable<any> {

    return this.http.delete<any>(
      `${this.baseUrl}/customers/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  searchCustomers(
    name: string,
    page: number = 0,
    size: number = 10
  ): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/customers/search`,
      {
        headers: this.getAuthHeaders(),
        params: {
          name: name,
          page: page.toString(),
          size: size.toString()
        }
      }
    );
  }


  // =========================
  // PLANS
  // =========================

  getPlans(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/plans`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  getPlanById(id: number): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/plans/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  createPlan(plan: any): Observable<any> {

    return this.http.post<any>(
      `${this.baseUrl}/plans`,
      plan,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  updatePlan(
    id: number,
    plan: any
  ): Observable<any> {

    return this.http.put<any>(
      `${this.baseUrl}/plans/${id}`,
      plan,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  deletePlan(id: number): Observable<any> {

    return this.http.delete<any>(
      `${this.baseUrl}/plans/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }


  // =========================
  // SERVICE REQUESTS
  // =========================

  getServiceRequests(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/service-requests`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  getServiceRequestById(id: number): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/service-requests/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  updateServiceRequest(
    id: number,
    request: any
  ): Observable<any> {

    return this.http.put<any>(
      `${this.baseUrl}/service-requests/${id}`,
      request,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  deleteServiceRequest(id: number): Observable<any> {

    return this.http.delete<any>(
      `${this.baseUrl}/service-requests/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  searchServiceRequests(
    status: string,
    page: number = 0,
    size: number = 10
  ): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/service-requests/search`,
      {
        headers: this.getAuthHeaders(),
        params: {
          status: status,
          page: page.toString(),
          size: size.toString()
        }
      }
    );
  }


  // =========================
  // COMPLAINTS
  // =========================

  getComplaints(): Observable<any[]> {

    return this.http.get<any[]>(
      `${this.baseUrl}/complaints`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  getComplaintById(id: number): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/complaints/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  updateComplaint(
    id: number,
    complaint: any
  ): Observable<any> {

    return this.http.put<any>(
      `${this.baseUrl}/complaints/${id}`,
      complaint,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  deleteComplaint(id: number): Observable<any> {

    return this.http.delete<any>(
      `${this.baseUrl}/complaints/${id}`,
      {
        headers: this.getAuthHeaders()
      }
    );
  }

  searchComplaints(
    status: string,
    page: number = 0,
    size: number = 10
  ): Observable<any> {

    return this.http.get<any>(
      `${this.baseUrl}/complaints/search`,
      {
        headers: this.getAuthHeaders(),
        params: {
          status: status,
          page: page.toString(),
          size: size.toString()
        }
      }
    );
  }

}