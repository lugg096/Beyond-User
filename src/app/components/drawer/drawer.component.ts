import { AfterViewInit, Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, Renderer2, Input, Inject } from '@angular/core';
import { GestureController, Platform } from '@ionic/angular';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { StorageService } from 'src/app/services/storage.service';
import { DOCUMENT } from '@angular/common';
import { DataService } from 'src/app/services/data-service.service';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-drawer',
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss'],
})
export class DrawerComponent implements AfterViewInit {
  @ViewChild('drawer', { read: ElementRef }) drawer: ElementRef;
  @Output('openStateChanged') openState: EventEmitter<boolean> = new EventEmitter();

  @ViewChild('pagados', { read: ElementRef }) pagados: ElementRef;
  @ViewChild('pendientes', { read: ElementRef }) pendientes: ElementRef;

  isOpen = false;
  openHeight = 0;
  filtro = "PEND";
  user: any;
  @Input() listPagados: any = [];
  @Input() listPendientes: any = [];

  constructor(
    private iab: InAppBrowser,
    private renderer: Renderer2,
    private plt: Platform,
    private _storage: StorageService,
    private gestureCtrl: GestureController,
    private _apiService: ApiServiceService,
    private _data: DataService,
    @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {

  }

  async ngAfterViewInit() {
    this.user = await this._storage.getLocalStorage('user');
    const drawer = this.drawer.nativeElement;
    this.openHeight = (this.plt.height() / 100) * 30;

    const gestture = await this.gestureCtrl.create({
      el: drawer,
      gestureName: 'swipe',
      direction: 'y',
      onMove: ev => {
        if (ev.deltaY < -this.openHeight || ev.deltaY > 120 || this.isOpen) return;
        drawer.style.transform = `translateY(${ev.deltaY}px)`;
      },
      onEnd: ev => {
        if (ev.deltaY < 0 && !this.isOpen) {
          drawer.style.transition = '.28s ease-out';
          drawer.style.transform = `translateY(${-this.openHeight}px)`;
          this.openState.emit(true);
          this.isOpen = true;
        } else if (ev.deltaY > 0 && !this.isOpen) {
          drawer.style.transition == '.28s ease-out';
          drawer.style.transform = `translateY(${-(this.plt.height() / 100) * 0.4}px)`;
          this.openState.emit(false);
          this.isOpen = false;
        }
      }
    });
    gestture.enable(true);
  }

  toggleDrawer() {
    const drawer = this.drawer.nativeElement;
    this.openState.emit(!this.isOpen)
    if (this.isOpen) {
      drawer.style.transition == '.28s ease-out';
      drawer.style.transform = ``;
      this.isOpen = false;
    } else {
      drawer.style.transition = '.28s ease-out';
      drawer.style.transform = `translateY(${-this.openHeight}px)`;;
      this.isOpen = true;
    }
  }

  filter(filter) {
    this.filtro = filter;
    if (filter == 'PEND') {

      /*  this.listPagos = this.listPendientes; */
      this.renderer.removeClass(this.pagados.nativeElement, 'select');
      this.renderer.addClass(this.pendientes.nativeElement, 'select');
    } else {
      /*     this.listPagos = this.listPagados; */
      this.renderer.removeClass(this.pendientes.nativeElement, 'select');
      this.renderer.addClass(this.pagados.nativeElement, 'select');

    }
  }

  refreshList(event) {
    this._data.changeMessage(event);
  }

  verDoc(doc) {
    this._apiService.verDoc(this.user.username, doc.annio, doc.mes).subscribe((res: any) => {
      /*  window.open(res.file, "_blank"); */
      let linkUrl = document.createElement("a");
      linkUrl.href = res.file;
      linkUrl.setAttribute('target', '_blank');
      linkUrl.click();
    });
  }

}
