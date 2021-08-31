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
exports.InicioPage = void 0;
var core_1 = require("@angular/core");
var InicioPage = /** @class */ (function () {
    function InicioPage(router, renderer, changeDetectorRef, _data, _storage, _apiService) {
        this.router = router;
        this.renderer = renderer;
        this.changeDetectorRef = changeDetectorRef;
        this._data = _data;
        this._storage = _storage;
        this._apiService = _apiService;
        this.iconVisible = false;
        this.listPagados = [];
        this.listPendientes = [];
        this.deudaTotal = null;
        this.porcentaje = 0;
        this.user = {
            username: '',
            pass: ''
        };
        this.dataUser = {
            name: '',
            phone: '',
            email: ''
        };
    }
    InicioPage.prototype.ngOnInit = function () {
        var _this = this;
        this._data.currentMessage.subscribe(function (event) {
            _this.getListPagos(event);
        });
    };
    InicioPage.prototype.ionViewDidEnter = function () {
        this.closeMenu();
        this.getListPagos('data1');
    };
    InicioPage.prototype.goEgresos = function () {
        this.router.navigate(['/egresos']);
    };
    InicioPage.prototype.getListPagos = function (event) {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this._storage.getLocalStorage('user')];
                    case 1:
                        _a.user = _b.sent();
                        this._apiService.getPagos(this.user.username, 'Pend').subscribe(function (res) {
                            _this._apiService.getPagos(_this.user.username, 'Pag').subscribe(function (res2) { return __awaiter(_this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            console.log('LISTA 1', res2);
                                            this.setParticipacion(res.data[0], res2.data[0]);
                                            if (event != 'data1')
                                                event.target.complete();
                                            this.dataUser.name = res2.data[0].nombre;
                                            this.dataUser.phone = res2.data[0].phone;
                                            this.dataUser.email = res2.data[0].email;
                                            this.listPagados = res2.data;
                                            return [4 /*yield*/, this._storage.setLocalStorage('dataUser', this.dataUser)];
                                        case 1:
                                            _a.sent();
                                            console.log('dataUser', this.dataUser);
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                            console.log('LISTA 2', res);
                            _this.listPendientes = res.data;
                            _this.deudaTotal = null;
                            if (_this.listPendientes.length == 0)
                                _this.deudaTotal = 0;
                            _this.listPendientes.forEach(function (d) {
                                _this.deudaTotal = _this.deudaTotal + d.original;
                            });
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    InicioPage.prototype.setParticipacion = function (rPend, rPago) {
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
            this.porcentaje = rPago.porcentaje;
            return;
        }
        var dPen = new Date(rPend.registro);
        var dPag = new Date(rPago.registro);
        if (dPen > dPag)
            this.porcentaje = rPend.porcentaje;
        else
            this.porcentaje = rPago.porcentaje;
    };
    InicioPage.prototype.toggleBackdrop = function (isVisible) {
        this.iconVisible = isVisible;
        this.changeDetectorRef.detectChanges(); //Se usa cuando Angular no detecta algunos cambios
    };
    InicioPage.prototype.openMenu = function () {
        this.renderer.addClass(this.contenido1.nativeElement, 'contenido1Open');
    };
    InicioPage.prototype.closeMenu = function () {
        this.renderer.removeClass(this.contenido1.nativeElement, 'contenido1Open');
    };
    __decorate([
        core_1.ViewChild("content1", { read: core_1.ElementRef, static: true })
    ], InicioPage.prototype, "content1");
    __decorate([
        core_1.ViewChild("contenido1", { read: core_1.ElementRef, static: true })
    ], InicioPage.prototype, "contenido1");
    InicioPage = __decorate([
        core_1.Component({
            selector: 'app-inicio',
            templateUrl: './inicio.page.html',
            styleUrls: ['./inicio.page.scss']
        })
    ], InicioPage);
    return InicioPage;
}());
exports.InicioPage = InicioPage;
