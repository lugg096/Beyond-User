import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AguaPage } from './agua.page';

const routes: Routes = [
  {
    path: '',
    component: AguaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AguaPageRoutingModule {}
