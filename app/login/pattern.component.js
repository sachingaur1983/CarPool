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
var app_service_1 = require('../service/app.service');
var PatternComponent = (function () {
    function PatternComponent(_loginService) {
        this._loginService = _loginService;
        this.pageTitle = 'Pattern';
        this.pin = '';
        this.buttons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        this.pinMaxLength = 4;
    }
    // appends buttons value to text field
    PatternComponent.prototype.append = function (event) {
        if (this.pin.length != this.pinMaxLength) {
            this.pin += event.target.textContent;
        }
    };
    PatternComponent.prototype.clear = function () {
        this.pin = '';
    };
    PatternComponent = __decorate([
        core_1.Component({
            selector: 'pattern',
            templateUrl: 'app/login/pattern.component.html',
            styleUrls: ['./app/login/pattern.component.css']
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], PatternComponent);
    return PatternComponent;
}());
exports.PatternComponent = PatternComponent;
//# sourceMappingURL=pattern.component.js.map