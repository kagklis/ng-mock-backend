import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, delay } from 'rxjs';
import { PANDAS } from '../../model/data';

@Injectable()
export class MockBackendInterceptor implements HttpInterceptor {
  private readonly MOCKED_RESPONSE = of(
    new HttpResponse({
      status: 200,
      statusText: 'OK',
      body: PANDAS,
    })
  ).pipe(delay(300));

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.method === 'GET' && req.url.endsWith('v1/pandas')) {
      console.log('[MockBackendInterceptor] - Returning mock data.');
      return this.MOCKED_RESPONSE;
    } else {
      return next.handle(req);
    }
  }
}
