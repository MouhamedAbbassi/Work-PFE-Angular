import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Etudiant } from '../models/etudiant';

@Injectable({
  providedIn: 'root'
})
export class EtudiantService {
  private baseUrl = 'http://localhost:3600/api';

  constructor(private http: HttpClient) { }

  signup(etudiant: Etudiant): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/signup', etudiant);
  }

  login(credentials: any): Observable<any> {
    return this.http.post<any>(this.baseUrl+'/login', credentials);
  }
}
