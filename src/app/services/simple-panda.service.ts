import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PANDAS } from '../model/data';
import { Panda } from '../model/panda';

@Injectable({
  providedIn: 'root'
})
export class SimplePandaService {
  public getPandas_of(): Observable<Panda[]> {
    console.log('[SimplePandaService] - Returning mock data.');
    return of(PANDAS);
  }
}
