import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './layout/public-layout/public-layout.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';


const routes: Routes = [{
  path: '',
  component: PublicLayoutComponent,
  children: [
    // {
    //   path: 'reservation',
    //   loadChildren: () => import('./modules/reservation/reservation.module').then(m => m.ReservationModule)   Lazy loading example
    // }
  ]
},
{
  path: 'admin',
  component: AdminLayoutComponent,
  children: []
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
