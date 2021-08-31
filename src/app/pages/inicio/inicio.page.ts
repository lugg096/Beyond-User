import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { DataService } from 'src/app/services/data-service.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  @ViewChild("content1", { read: ElementRef, static: true }) content1: ElementRef;
  @ViewChild("contenido1", { read: ElementRef, static: true }) contenido1: ElementRef;


  iconVisible = false;
  listPagados = [];
  listPendientes = [];
  deudaTotal = null;
  porcentaje = 0;

  user: any = {
    username: '',
    pass: ''
  };

  dataUser: any = {
    name: '',
    phone: '',
    email: ''
  };

  constructor(
    public router: Router,
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
    private _data: DataService,
    private _storage: StorageService,
    private _apiService: ApiServiceService) { }


  ngOnInit() {
    this._data.currentMessage.subscribe(event => {
      this.getListPagos(event);
    });
  }

  


  ionViewDidEnter() {
    this.closeMenu();
    this.getListPagos('data1');
  }

  goEgresos(){
    this.router.navigate(['/egresos']);
  }

  async getListPagos(event?) {
    this.user = await this._storage.getLocalStorage('user');
    this._apiService.getPagos(this.user.username, 'Pend').subscribe((res: any) => {

      this._apiService.getPagos(this.user.username, 'Pag').subscribe(async (res2: any) => {
        console.log('LISTA 1', res2);
        this.setParticipacion(res.data[0], res2.data[0]);
        if (event != 'data1') event.target.complete();
        this.dataUser.name = res2.data[0].nombre;
        this.dataUser.phone = res2.data[0].phone;
        this.dataUser.email = res2.data[0].email;

        this.listPagados = res2.data;
        await this._storage.setLocalStorage('dataUser', this.dataUser);
        console.log('dataUser', this.dataUser);
      });

      console.log('LISTA 2', res);
      this.listPendientes = res.data;
      this.deudaTotal = null;
      if (this.listPendientes.length == 0) this.deudaTotal = 0;
      this.listPendientes.forEach(d => {
        this.deudaTotal = this.deudaTotal + d.original;
      });

    });
  }


  setParticipacion(rPend, rPago) {
    console.log('rPend', rPend);
    console.log('rPago', rPago);
    if (!rPend && !rPago) {
      this.porcentaje = 0;
      return;
    }
    if (rPend && !rPago) {
      this.porcentaje = rPend.porcentaje;
      return;
    }
    if (!rPend && rPago) {
      this.porcentaje = rPago.porcentaje; return;
    }

    let dPen = new Date(rPend.registro);
    let dPag = new Date(rPago.registro);
    if (dPen > dPag) this.porcentaje = rPend.porcentaje;
    else this.porcentaje = rPago.porcentaje;
  }

  toggleBackdrop(isVisible) {
    this.iconVisible = isVisible;
    this.changeDetectorRef.detectChanges();//Se usa cuando Angular no detecta algunos cambios
  }

  openMenu() {
    this.renderer.addClass(this.contenido1.nativeElement, 'contenido1Open');
  }

  closeMenu() {
    this.renderer.removeClass(this.contenido1.nativeElement, 'contenido1Open');
  }

}
