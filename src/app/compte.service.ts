import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from './compte';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class CompteService {

  constructor(private http:HttpClient) { }
    baseUrl = 'http://localhost:8080'


  public getCompteList(): Observable<Compte[]> {
    return this.http.get<Compte[]>(`${this.baseUrl}/getClientComptes`);
  }

  public updateEmployee(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }


  public getClient(id: string): Observable<Client> {
    return this.http.get<Client>(`${this.baseUrl}/getClient?id=${id}`);
  }
  public VerserSoldeClient(object: Object) {
    return this.http.post(`${this.baseUrl}/VerserSoldeClient`,object);
  }
  public rechargeTel(compte: Compte) {
    return this.http.post(`${this.baseUrl}/rechargeTel`,compte);
  }

  public loginClient(client :Client): Observable<any> {
    return this.http.post<Client>(`${this.baseUrl}/loginClient`,client);
  }

  public getClientComptes(id : String): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/getClientComptesid` , id);
  }

}
