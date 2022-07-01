import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkout3Page } from './checkout3.page';

const routes: Routes = [
  {
    path: '',
    component: Checkout3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkout3PageRoutingModule {}
