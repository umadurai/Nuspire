import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {EmpModelModule} from './emp-model/emp-model.module';

@Injectable({
  providedIn: 'root'
})

export class EmpSaveService {

  constructor(private httpClient: HttpClient) { }
  // @ts-ignore
  private listEmp: EmpModelModule[] = [];
  url = 'http://localhost:8000';

  getEmp(): EmpModelModule[] {
    return this.listEmp;
  }

  putEmp(emp: EmpModelModule) {

    this.listEmp.push(emp);
  }

  // @ts-ignore
  save(parameters: { date: string; name: string }): Observable<HttpResponse<EmpModelModule>> {


    const body = { name: parameters.name , date: parameters.date};
    const myData = JSON.stringify(body);

    const httpHeaders = new HttpHeaders({
      'Content-Type' : 'application/json',
      'Access-Control-Allow-Origin': '*'
    });

    return this.httpClient.post<EmpModelModule>(this.url, { myData }, {
      headers: httpHeaders,
      observe: 'response',
      reportProgress: true
    });
  }

 private handleError(error: Response) {
    console.error(error);
    return('server Error');
   }
}
