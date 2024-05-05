import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Entreprise } from '../models/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {
  private apiUrl = 'http://localhost:3600/api/entreprise/signup';

  constructor(private http: HttpClient) { }

  signup(entreprise: Entreprise): Observable<any> {
    return this.http.post<any>(this.apiUrl, entreprise);
  }
}
