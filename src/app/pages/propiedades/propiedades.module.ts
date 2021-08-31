import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PropiedadesPageRoutingModule } from './propiedades-routing.module';

import { PropiedadesPage } from './propiedades.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PropiedadesPageRoutingModule
  ],
  declarations: [PropiedadesPage]
})
export class PropiedadesPageModule {}
