import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AguaPageRoutingModule } from './agua-routing.module';

import { AguaPage } from './agua.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AguaPageRoutingModule,
    ComponentsModule
  ],
  declarations: [AguaPage]
})
export class AguaPageModule {}
