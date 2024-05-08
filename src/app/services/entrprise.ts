import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private apiUrl = 'http://localhost:3000/api/entreprise';

  constructor(private http: HttpClient) { }

  signup(entreprise: Entreprise): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/signup', entreprise);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/login', credentials);
  }

  profile(): Observable<any> {
    // Get token from local storage
    const token = localStorage.getItem('token');

    // Add token to the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make the HTTP request with the headers
    return this.http.get<any>(`${this.apiUrl}/profile`, { headers });
  }

  getProfileById(id: any): Observable<any> {
    // Concatenate the id parameter to the URL
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
