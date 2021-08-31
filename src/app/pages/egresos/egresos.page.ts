import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { ModalController, PickerController } from '@ionic/angular';
import { DataEgresoComponent } from 'src/app/components/data-egreso/data-egreso.component';

@Component({
  selector: 'app-egresos',
  templateUrl: './egresos.page.html',
  styleUrls: ['./egresos.page.scss'],
})
export class EgresosPage implements OnInit {

  constructor(
    private _picker: PickerController,
    private _modal: ModalController,
    public router: Router,
    private _api: ApiServiceService) { }
  date: any;
  listEgresos = [];

  ngOnInit() {
    let hoy = new Date();
    let anio = hoy.getFullYear();
    let mes = (hoy.getMonth() + 1) < 10 ? '0' + (hoy.getMonth() + 1) : (hoy.getMonth() + 1);
    this.date = anio + '-' + mes + '-01';
    this.getEgresos(mes, anio);

  }

  async getDate(event) {
    console.log('date', event.detail.value);
    let anio = event.detail.value.substr(0,4);
    let mes = event.detail.value.substr(5,2);
    this.getEgresos(mes, anio);
  }

  verData(data) {
    this._modal.create({
      component: DataEgresoComponent,
      componentProps: {
        data: data
      }
    }).then((modal) => modal.present());
  }

  goInicio() {
    this.router.navigate(['/inicio']);
  }

  getEgresos(mes, anio) {
    this._api.getEgresos(mes, anio).subscribe((res: any) => {
     /*  if (!res) return; */
      console.log('res', res);
      this.listEgresos = res.data;

    })
  }
}
