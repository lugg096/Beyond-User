import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }

  login(data: any) {
    const number = data.username.substring(0, data.username.length - 1);
    const torre = data.username.substring(data.username.length - 1, data.username.length);
    let URI = env.URL_API + "unidad/?operation=login&b=" + number + "&a=" + data.pass + "&c=" + torre;
    return this.http.get<any[]>(URI);
  }


  getPagos(username, type) {
    const number = username.substring(0, username.length - 1);
    const torre = username.substring(username.length - 1, username.length);
    let URI = env.URL_API + "recibo/?operation=mispagos&modo=" + type + "&numero=" + number + "&torre=" + torre;
    return this.http.get<any[]>(URI);
  }

  verDoc(username, anio, mes) {
    const number = username.substring(0, username.length - 1);
    const torre = username.substring(username.length - 1, username.length);
    let URI = env.URL_API + "recibo/?operation=print&annio=" + anio + "&mes=" + mes + "&numero=" + number + "&torre=" + torre;
    console.log('URL',URI)
    return this.http.get<any[]>(URI);

  }

  getPropiedades(username) {
    const parametro = {
      numero: username.substring(0, username.length - 1),
      torre: username.substring(username.length - 1, username.length)
    };
    let URI = env.URL_API + "unidad/?operation=padron";
    return this.http.get(URI, { params: parametro });
  }

  getConsumoAgua(username) {
    const parametro = {
      numero: username.substring(0, username.length - 1),
      torre: username.substring(username.length - 1, username.length)
    };
    let URI = env.URL_API + "recibo/?operation=miconsumoagua";
    return this.http.get(URI, { params: parametro });
  }



  getEgresos(mes, anio) {
    let URI = env.URL_API + "banco/?operation=listEgresos&periodo=" + anio + mes;
    console.log(URI);
    return this.http.get(URI);
  }

}
