"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.DataEgresoComponent = void 0;
var core_1 = require("@angular/core");
var DataEgresoComponent = /** @class */ (function () {
    function DataEgresoComponent(_modal) {
        this._modal = _modal;
    }
    DataEgresoComponent.prototype.ngOnInit = function () {
        console.log('Mostrar data', this.data);
        this.data.url_serv = atob(this.data.url_serv);
        this.data.url_doc = atob(this.data.url_doc);
        console.log(this.data.url_serv);
        console.log(this.data.url_doc);
    };
    DataEgresoComponent.prototype.continuar = function () {
        this._modal.dismiss({
            dataPersonal: {}
        });
    };
    DataEgresoComponent.prototype.closeModal = function () {
        this._modal.dismiss({ dataPersonal: null });
    };
    DataEgresoComponent = __decorate([
        core_1.Component({
            selector: 'app-data-egreso',
            templateUrl: './data-egreso.component.html',
            styleUrls: ['./data-egreso.component.scss']
        })
    ], DataEgresoComponent);
    return DataEgresoComponent;
}());
exports.DataEgresoComponent = DataEgresoComponent;
