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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var constants_api_urls_1 = require('../constants/constants-api-urls');
var AppService = (function () {
    function AppService(_http) {
        this._http = _http;
    }
    AppService.prototype.isAuthenticated = function (credentials) {
        return Promise.resolve(true);
    };
    AppService.prototype.getUsers = function () {
        return this._http.get(constants_api_urls_1.ApiConstants.registerUrl).toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    AppService.prototype.register = function (userInfo) {
        return this._http.post(constants_api_urls_1.ApiConstants.registerUrl, userInfo)
            .toPromise()
            .then(this.handleResponse)
            .catch(this.handleError);
    };
    AppService.prototype.handleResponse = function (response) {
        return response.json().data;
    };
    AppService.prototype.handleError = function (error) {
        console.error("An error occured", error);
        return Promise.reject(error.message || error);
    };
    AppService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], AppService);
    return AppService;
}());
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map