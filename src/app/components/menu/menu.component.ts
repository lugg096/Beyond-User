import { Component, Inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { StorageService } from 'src/app/services/storage.service';
import { environment as env } from 'src/environments/environment';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  @Input() dataUser: any;
  @Input() user: any;
  public linkBalance = '';
  constructor(
    public alertController: AlertController,
    public router: Router,
    private _storage: StorageService,
    private _apiService: ApiServiceService
  ) { }


  meses = [
    'ENE',
    'FEB',
    'MAR',
    'ABR',
    'MAY',
    'JUN',
    'JUL',
    'AGO',
    'SEP',
    'OCT',
    'NOV',
    'DIC'
  ];
  ngOnInit() {
  }

  goPerfil() {
    this.router.navigate(['/profile']);
  }

  goPropiedades() {
    this.router.navigate(['/propiedades']);
  }

  getPropiedades() {
    this._apiService.getPropiedades(this.user.username).subscribe(res => {
      console.log('res', res);

    });
  }
  text = '';

  async getBalane(event) {
    console.log('date', event.detail.value);
    let anio = event.detail.value.substr(0, 4);
    let mes = Number(event.detail.value.substr(5, 2)) - 1;
    let alink = env.URL_API + "recibo/pdf/BALANCE_" + anio + this.meses[mes] + ".pdf";
    window.open(alink, "_blank");
  }

  async getInhaviles(event) {
    console.log('date', event.detail.value);
    let anio = event.detail.value.substr(0, 4);
    let mes = Number(event.detail.value.substr(5, 2)) - 1;
    let alink = env.URL_API+"recibo/pdf/DEUDA_" + anio + this.meses[mes] + ".pdf";
    window.open(alink, "_blank");
  }

  async getPagar(event) {
    console.log('date', event.detail.value);
    let anio = event.detail.value.substr(0, 4);
    let mes = Number(event.detail.value.substr(5, 2)) - 1;
    let alink = env.URL_API+"recibo/pdf/PAGAR_" + anio + this.meses[mes] + ".pdf";
    window.open(alink, "_blank");
  }

  async getCobrar(event) {
    console.log('date', event.detail.value);
    let anio = event.detail.value.substr(0, 4);
    let mes = Number(event.detail.value.substr(5, 2)) - 1;
    let alink = env.URL_API+"recibo/pdf/COBRAR_" + anio + this.meses[mes] + ".pdf";
    window.open(alink, "_blank");
  }


  async getAguaCondominio(event) {
    console.log('date', event.detail.value);
    let anio = event.detail.value.substr(0, 4);
    let mes = Number(event.detail.value.substr(5, 2)) - 1;
    let alink = env.URL_API+"recibo/pdf/CONSUMO_AGUA_" + anio + this.meses[mes] + ".pdf";
    window.open(alink, "_blank");
  }

  getAgua(){
    this.router.navigate(['/agua']);
  }

  async getUnidades(event) {
    console.log('date', event.detail.value);
    let anio = event.detail.value.substr(0, 4);
    let mes = Number(event.detail.value.substr(5, 2)) - 1;
    let alink = env.URL_API+"recibo/pdf/UNIDAD_" + anio + this.meses[mes] + ".pdf";
    window.open(alink, "_blank");
  }


  async cerrarSesion() {

    let textHeader = 'Cerrar sesión';
    let textMessage = 'Esta seguro de cerrar sesión?';

    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: textHeader,
      message: textMessage,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
          }
        }, {
          text: 'Aceptar',
          handler: async () => {
            console.log('aceptar');
            await this._storage.clearStorage();
            this.router.navigate(['home']);
          }
        }
      ]
    });

    await alert.present();
  }
}
