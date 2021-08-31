"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ComponentsModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_1 = require("@ionic/angular");
var drawer_component_1 = require("./drawer/drawer.component");
var menu_component_1 = require("./menu/menu.component");
var data_egreso_component_1 = require("./data-egreso/data-egreso.component");
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        core_1.NgModule({
            declarations: [
                drawer_component_1.DrawerComponent,
                menu_component_1.MenuComponent,
                data_egreso_component_1.DataEgresoComponent
            ],
            exports: [
                drawer_component_1.DrawerComponent,
                menu_component_1.MenuComponent,
                data_egreso_component_1.DataEgresoComponent
            ],
            imports: [
                common_1.CommonModule,
                angular_1.IonicModule
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
exports.ComponentsModule = ComponentsModule;
