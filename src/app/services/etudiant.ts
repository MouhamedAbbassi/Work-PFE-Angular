import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signup(etudiant: Etudiant): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/signup', etudiant);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/login', credentials);
  }
  profile(): Observable<any> {
    // Get token from local storage
    const token = localStorage.getItem('token');

    // Add token to the request headers
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);

    // Make the HTTP request with the headers
    return this.http.get<any>(`${this.baseUrl}/entreprise/profile`, { headers });
  }

  getProfileById(id: any): Observable<any> {
    // Concatenate the id parameter to the URL
    return this.http.get<any>(`${this.baseUrl}/etudiant/${id}`);
  }
}
