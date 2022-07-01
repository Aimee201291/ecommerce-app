import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkout2PageRoutingModule } from './checkout2-routing.module';

import { Checkout2Page } from './checkout2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkout2PageRoutingModule
  ],
  declarations: [Checkout2Page]
})
export class Checkout2PageModule {}
