import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { INIT_API_CONFIGURATION } from './core/app-api-initializer';
import { SharedModule } from './shared/shared.module';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicLayoutComponent,
    AdminLayoutComponent
  ],
  imports: [
    BrowserModule,

    // core & shared
    CoreModule.forRoot(),
    SharedModule,


    AppRoutingModule
  ],
  providers: [INIT_API_CONFIGURATION],
  bootstrap: [AppComponent]
})
export class AppModule { }
