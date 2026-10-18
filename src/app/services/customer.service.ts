import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private apiUrl = 'https://atoz-network-services.onrender.com/api/customers';

  constructor(private http: HttpClient) {}

  getCustomers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  searchCustomers(name: string): Observable<any> {
    const params = new HttpParams()
      .set('name', name)
      .set('page', '0')
      .set('size', '10');

    return this.http.get<any>(
      `${this.apiUrl}/search`,
      { params }
    );
  }

  deleteCustomer(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}