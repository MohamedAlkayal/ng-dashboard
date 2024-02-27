import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { httpInterceptor } from './services/interceptors/http-interceptor.interceptor';
import { authTokenInterceptor } from './services/interceptors/auth-token.interceptor';
import { TokenUtilsService } from './services/token/token-utils.service';

export const appConfig: ApplicationConfig = {
  providers:
    [
      provideRouter(routes),
      provideClientHydration(),
      provideAnimationsAsync(),
      provideHttpClient(withInterceptors([httpInterceptor,authTokenInterceptor])),
    ]
};
