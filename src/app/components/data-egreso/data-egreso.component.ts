import { Component, OnInit } from '@angular/core';
import { ModalController, PickerController } from '@ionic/angular';
import { PickerOptions } from '@ionic/core';
@Component({
  selector: 'app-data-egreso',
  templateUrl: './data-egreso.component.html',
  styleUrls: ['./data-egreso.component.scss'],
})
export class DataEgresoComponent implements OnInit {

  constructor(private _modal: ModalController,) { }

  data: any;
  ngOnInit() {
    console.log('Mostrar data', this.data);
    this.data.url_serv = atob(this.data.url_serv);
    this.data.url_doc = atob(this.data.url_doc);
    console.log(this.data.url_serv);
    console.log(this.data.url_doc);
    
  }

  continuar() {
    this._modal.dismiss({
      dataPersonal: {}
    });
  }

  closeModal() {
    this._modal.dismiss({ dataPersonal: null });
  }


}
