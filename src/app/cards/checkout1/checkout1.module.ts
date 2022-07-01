import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkout1PageRoutingModule } from './checkout1-routing.module';

import { Checkout1Page } from './checkout1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkout1PageRoutingModule
  ],
  declarations: [Checkout1Page]
})
export class Checkout1PageModule {}
