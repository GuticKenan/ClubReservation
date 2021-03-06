import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class TokenInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem('token');
    // Apply the headers
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${token}`,
      }
    });
 
    // Also handle errors globally
    return next.handle(req);
  }
}