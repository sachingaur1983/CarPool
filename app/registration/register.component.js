"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var app_service_1 = require('../service/app.service');
var user_info_1 = require('../models/user-info');
var RegisterComponent = (function () {
    function RegisterComponent(_appService, router) {
        this._appService = _appService;
        this.router = router;
        this.pageTitle = 'Register';
        this.userInfo = new user_info_1.UserRegisterInfo();
        this.isValid = false;
    }
    RegisterComponent.prototype.onRegister = function () {
        console.log(JSON.stringify(this.userInfo));
        this._appService.register(this.userInfo).then(this.handleResult);
        this._appService.getUsers().then(this.handleResult);
        this.router.navigate(['/pattern']);
    };
    RegisterComponent.prototype.handleResult = function (result) {
        console.log("service output \n" + JSON.stringify(result));
    };
    Object.defineProperty(RegisterComponent.prototype, "diagnostic", {
        get: function () { return JSON.stringify(this.userInfo); },
        enumerable: true,
        configurable: true
    });
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            templateUrl: 'app/registration/register.component.html',
            styleUrls: ['./app/registration/register.component.css']
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService, router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map