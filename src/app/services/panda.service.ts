import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Panda } from '../model/panda';

@Injectable({
  providedIn: 'root'
})
export class PandaService {
  constructor(private http: HttpClient) {}

  public getPandas(): Observable<Panda[]> {
    return this.http.get<Panda[]>('api/pandas');
  }
}
