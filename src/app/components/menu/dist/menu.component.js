"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.MenuComponent = void 0;
var core_1 = require("@angular/core");
var environment_1 = require("src/environments/environment");
var MenuComponent = /** @class */ (function () {
    function MenuComponent(alertController, router, _storage, _apiService) {
        this.alertController = alertController;
        this.router = router;
        this._storage = _storage;
        this._apiService = _apiService;
        this.linkBalance = '';
        this.meses = [
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
        this.text = '';
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent.prototype.goPerfil = function () {
        this.router.navigate(['/profile']);
    };
    MenuComponent.prototype.goPropiedades = function () {
        this.router.navigate(['/propiedades']);
    };
    MenuComponent.prototype.getPropiedades = function () {
        this._apiService.getPropiedades(this.user.username).subscribe(function (res) {
            console.log('res', res);
        });
    };
    MenuComponent.prototype.getBalane = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var anio, mes, alink;
            return __generator(this, function (_a) {
                console.log('date', event.detail.value);
                anio = event.detail.value.substr(0, 4);
                mes = Number(event.detail.value.substr(5, 2)) - 1;
                alink = environment_1.environment.URL_API + "recibo/pdf/BALANCE_" + anio + this.meses[mes] + ".pdf";
                window.open(alink, "_blank");
                return [2 /*return*/];
            });
        });
    };
    MenuComponent.prototype.getInhaviles = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var anio, mes, alink;
            return __generator(this, function (_a) {
                console.log('date', event.detail.value);
                anio = event.detail.value.substr(0, 4);
                mes = Number(event.detail.value.substr(5, 2)) - 1;
                alink = environment_1.environment.URL_API + "recibo/pdf/DEUDA_" + anio + this.meses[mes] + ".pdf";
                window.open(alink, "_blank");
                return [2 /*return*/];
            });
        });
    };
    MenuComponent.prototype.getPagar = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var anio, mes, alink;
            return __generator(this, function (_a) {
                console.log('date', event.detail.value);
                anio = event.detail.value.substr(0, 4);
                mes = Number(event.detail.value.substr(5, 2)) - 1;
                alink = environment_1.environment.URL_API + "recibo/pdf/PAGAR_" + anio + this.meses[mes] + ".pdf";
                window.open(alink, "_blank");
                return [2 /*return*/];
            });
        });
    };
    MenuComponent.prototype.getCobrar = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var anio, mes, alink;
            return __generator(this, function (_a) {
                console.log('date', event.detail.value);
                anio = event.detail.value.substr(0, 4);
                mes = Number(event.detail.value.substr(5, 2)) - 1;
                alink = environment_1.environment.URL_API + "recibo/pdf/COBRAR_" + anio + this.meses[mes] + ".pdf";
                window.open(alink, "_blank");
                return [2 /*return*/];
            });
        });
    };
    MenuComponent.prototype.getAguaCondominio = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var anio, mes, alink;
            return __generator(this, function (_a) {
                console.log('date', event.detail.value);
                anio = event.detail.value.substr(0, 4);
                mes = Number(event.detail.value.substr(5, 2)) - 1;
                alink = environment_1.environment.URL_API + "recibo/pdf/CONSUMO_AGUA_" + anio + this.meses[mes] + ".pdf";
                window.open(alink, "_blank");
                return [2 /*return*/];
            });
        });
    };
    MenuComponent.prototype.getAgua = function () {
        this.router.navigate(['/agua']);
    };
    MenuComponent.prototype.getUnidades = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var anio, mes, alink;
            return __generator(this, function (_a) {
                console.log('date', event.detail.value);
                anio = event.detail.value.substr(0, 4);
                mes = Number(event.detail.value.substr(5, 2)) - 1;
                alink = environment_1.environment.URL_API + "recibo/pdf/UNIDAD_" + anio + this.meses[mes] + ".pdf";
                window.open(alink, "_blank");
                return [2 /*return*/];
            });
        });
    };
    MenuComponent.prototype.cerrarSesion = function () {
        return __awaiter(this, void 0, void 0, function () {
            var textHeader, textMessage, alert;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        textHeader = 'Cerrar sesión';
                        textMessage = 'Esta seguro de cerrar sesión?';
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: textHeader,
                                message: textMessage,
                                buttons: [
                                    {
                                        text: 'Cancelar',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                        }
                                    }, {
                                        text: 'Aceptar',
                                        handler: function () { return __awaiter(_this, void 0, void 0, function () {
                                            return __generator(this, function (_a) {
                                                switch (_a.label) {
                                                    case 0:
                                                        console.log('aceptar');
                                                        return [4 /*yield*/, this._storage.clearStorage()];
                                                    case 1:
                                                        _a.sent();
                                                        this.router.navigate(['home']);
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }
                                    }
                                ]
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        core_1.Input()
    ], MenuComponent.prototype, "dataUser");
    __decorate([
        core_1.Input()
    ], MenuComponent.prototype, "user");
    MenuComponent = __decorate([
        core_1.Component({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        })
    ], MenuComponent);
    return MenuComponent;
}());
exports.MenuComponent = MenuComponent;
