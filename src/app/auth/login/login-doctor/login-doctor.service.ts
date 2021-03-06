import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Login } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginDoctorService {

  params = new HttpParams();

  responseOfAuthDoc = new Subject<boolean>();

  constructor(private http:HttpClient) { }

  private readonly baseUrl= 'http://localhost:9000/sacchon'

  authenticationD(values:Login): Observable<any>{
    console.log(values)
     return this.http.post<any>(`${this.baseUrl}/login/doctor`,
    values)

  }

  logged(){
    this.responseOfAuthDoc.next(true);
  }

}