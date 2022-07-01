import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Checkout3PageRoutingModule } from './checkout3-routing.module';

import { Checkout3Page } from './checkout3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Checkout3PageRoutingModule
  ],
  declarations: [Checkout3Page]
})
export class Checkout3PageModule {}
