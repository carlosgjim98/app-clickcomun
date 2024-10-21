import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DniVerificationPageRoutingModule } from './dni-verification-routing.module';

import { DniVerificationPage } from './dni-verification.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DniVerificationPageRoutingModule
  ],
  declarations: [DniVerificationPage]
})
export class DniVerificationPageModule {}
