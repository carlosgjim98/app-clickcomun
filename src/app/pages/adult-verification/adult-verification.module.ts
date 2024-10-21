import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdultVerificationPageRoutingModule } from './adult-verification-routing.module';

import { AdultVerificationPage } from './adult-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdultVerificationPageRoutingModule
  ],
  declarations: [AdultVerificationPage]
})
export class AdultVerificationPageModule {}
