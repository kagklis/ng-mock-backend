import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { PANDAS } from '../model/data';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    console.log('[InMemoryDataService] - Returning mock data.');
    return { pandas: PANDAS };
  }
}
