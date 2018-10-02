import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const copiedReq: HttpRequest<any> = req.clone({
      headers: req.headers.set('Content-Type', 'application/json')
    });
    return next.handle(copiedReq);
  }

}
