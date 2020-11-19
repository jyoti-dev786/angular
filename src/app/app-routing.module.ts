import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BrokerComponent} from './broker/broker.component';
import {CustomerComponent} from './customer/customer.component';
import {PointssComponent} from './pointss/pointss.component';


const routes: Routes = [
  {
    path : 'broker' , component:BrokerComponent
  },

  {
    path : 'customer' , component:CustomerComponent
  },

  {
    path : 'pointss' , component:PointssComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
