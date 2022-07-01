import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Checkout1Page } from './checkout1.page';

const routes: Routes = [
  {
    path: '',
    component: Checkout1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Checkout1PageRoutingModule {}
