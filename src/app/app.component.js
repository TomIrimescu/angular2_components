"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        /* this commented code is for the Component Lifecycle Usage Examples*/
        this.delete = false;
        this.test = 'Starting value';
        this.boundValue = 1000;
    }
    AppComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-root',
            template: "\n<!--\t\t<h1>Root Component</h1>\n\t\t<h3> Template HTML</h3>\n\t\t<app-databinding></app-databinding>-->\n<!-- this commented code is for the Component Lifecycle Usage Examples-->\n\t\t<app-lifecycle *ngIf=\"!delete\" [bindable]=\"boundValue\">\n\t\t\t<p #boundContent>{{test}}</p>\n\t\t</app-lifecycle>\n\t\t<button (click)=\"test = 'Changed value'\">Click to Change Content</button>\n\t\t<button (click)=\"boundValue = 2000\">Click to Change Binding</button>\n\t\t<button (click)=\"delete = true\">Click to Delete</button>\n\t"
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map