import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../../auth';

const API_USERS_URL = `${environment.apiUrl}`;

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  httpHeaders: any;

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) {
    this.httpHeaders = new HttpHeaders({
      Authorization: `Bearer ${this.authService.getAuthFromLocalStorage()?.authToken}`,
    });
  }

  createReport(data: any): Observable<any> {
    return this.http.post(``, data, { headers: this.httpHeaders });
  }

  readReport(): Observable<any> {
    return this.http.get(``, { headers: this.httpHeaders });
  }

  updateReport(data: any, id: any): Observable<any> {
    return this.http.patch(``, data, { headers: this.httpHeaders });
  }

  deleteReport(id: any): Observable<any> {
    return this.http.delete(``, { headers: this.httpHeaders });
  }
}
