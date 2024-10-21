import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FavouriteAudiosPageRoutingModule } from './favourite-audios-routing.module';

import { FavouriteAudiosPage } from './favourite-audios.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FavouriteAudiosPageRoutingModule
  ],
  declarations: [FavouriteAudiosPage]
})
export class FavouriteAudiosPageModule {}
