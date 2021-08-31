import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-propiedades',
  templateUrl: './propiedades.page.html',
  styleUrls: ['./propiedades.page.scss'],
})
export class PropiedadesPage implements OnInit {

  constructor(
    public router: Router,
    private _storage: StorageService,
    private _apiService: ApiServiceService,
  ) { }
  user:any;
  listProp=[];
  ngOnInit() {
    this.getPropiedades();
  }

  goInicio() {
    this.router.navigate(['/inicio']);
  }

  async getPropiedades() {
    this.user = await this._storage.getLocalStorage('user');
    this._apiService.getPropiedades(this.user.username).subscribe((res:any) => {
      if(!res)return;
      console.log(res);
      
      this.listProp=res.data;
    });
  }

}
