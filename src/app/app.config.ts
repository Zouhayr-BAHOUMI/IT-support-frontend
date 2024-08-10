import { ApplicationConfig, inject } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HttpHandler, HttpInterceptorFn, HttpRequest, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthService } from './core/auth.service';
import { authInterceptor } from './core/auth.interceptor';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),AuthService,
    provideHttpClient(
      withInterceptors([authInterceptor])
    )]
};
