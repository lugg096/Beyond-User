"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ApiServiceService = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var ApiServiceService = /** @class */ (function () {
    function ApiServiceService(http) {
        this.http = http;
    }
    ApiServiceService.prototype.login = function (data) {
        var number = data.username.substring(0, data.username.length - 1);
        var torre = data.username.substring(data.username.length - 1, data.username.length);
        var URI = environment_1.environment.URL_API + "unidad/?operation=login&b=" + number + "&a=" + data.pass + "&c=" + torre;
        return this.http.get(URI);
    };
    ApiServiceService.prototype.getPagos = function (username, type) {
        var number = username.substring(0, username.length - 1);
        var torre = username.substring(username.length - 1, username.length);
        var URI = environment_1.environment.URL_API + "recibo/?operation=mispagos&modo=" + type + "&numero=" + number + "&torre=" + torre;
        return this.http.get(URI);
    };
    ApiServiceService.prototype.verDoc = function (username, anio, mes) {
        var number = username.substring(0, username.length - 1);
        var torre = username.substring(username.length - 1, username.length);
        var URI = environment_1.environment.URL_API + "recibo/index.php?operation=print&annio=" + anio + "&mes=" + mes + "&numero=" + number + "&torre=" + torre;
        return this.http.get(URI);
    };
    ApiServiceService.prototype.getPropiedades = function (username) {
        var parametro = {
            numero: username.substring(0, username.length - 1),
            torre: username.substring(username.length - 1, username.length)
        };
        var URI = environment_1.environment.URL_API + "unidad/?operation=padron";
        return this.http.get(URI, { params: parametro });
    };
    ApiServiceService.prototype.getConsumoAgua = function (username) {
        var parametro = {
            numero: username.substring(0, username.length - 1),
            torre: username.substring(username.length - 1, username.length)
        };
        var URI = environment_1.environment.URL_API + "recibo/?operation=miconsumoagua";
        return this.http.get(URI, { params: parametro });
    };
    ApiServiceService.prototype.getEgresos = function (mes, anio) {
        var URI = environment_1.environment.URL_API + "banco/?operation=listEgresos&periodo=" + anio + mes;
        console.log(URI);
        return this.http.get(URI);
    };
    ApiServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ApiServiceService);
    return ApiServiceService;
}());
exports.ApiServiceService = ApiServiceService;
