import { NgModule, Optional, SkipSelf, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { JwtModule } from '@auth0/angular-jwt';

export function GetToken() {
  return  localStorage.getItem('token');
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
      tokenGetter: GetToken
      }
    }),
  ],
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(`${parentModule} has already been loaded. Import core module just in appmodule!`)
    }
  }
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true},
        AuthService,
        AuthGuard
      ]
    }
  }
 }
