import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
/** Add headers to request. */
@Injectable()
export class GlobalInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    const token = window.localStorage.getItem('token');
    if (token) {
      const authReq = req.clone({
        headers: req.headers.set('X-Access-Token', token)
      });
      return next.handle(authReq);
    }
    return next.handle(req);
  }
}
