import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DrawerComponent } from './drawer/drawer.component';
import { MenuComponent } from './menu/menu.component';
import { DataEgresoComponent } from './data-egreso/data-egreso.component';

@NgModule({
  declarations: [
    DrawerComponent,
    MenuComponent,
    DataEgresoComponent
  ],
  exports:[
    DrawerComponent,
    MenuComponent,
    DataEgresoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
