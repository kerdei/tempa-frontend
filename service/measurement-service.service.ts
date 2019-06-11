import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Measurement } from 'src/app/measurement'
import { Observable } from 'rxjs';

 
@Injectable()
export class MeasurementService {
 
  private measurementsUrl: string;
 
  constructor(private http: HttpClient) {
    this.measurementsUrl = 'http://localhost:8080/measurements';
  }
 
  public findAll(): Observable<Measurement[]> {
    return this.http.get<Measurement[]>(this.measurementsUrl);
  }
  
}