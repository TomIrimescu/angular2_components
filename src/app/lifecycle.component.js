"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var LifecycleComponent = (function () {
    function LifecycleComponent() {
        this.bindable = 1000;
    }
    LifecycleComponent.prototype.ngOnChanges = function () {
        this.log('ngOnChanges');
    };
    LifecycleComponent.prototype.ngOnInit = function () {
        this.log('ngOnInit');
    };
    LifecycleComponent.prototype.ngDoCheck = function () {
        this.log('ngDoCheck');
    };
    LifecycleComponent.prototype.ngAfterContentInit = function () {
        this.log('ngAfterContentInit');
        console.log(this.boundContent);
    };
    LifecycleComponent.prototype.ngAfterContentChecked = function () {
        this.log('ngAfterContentChecked');
    };
    LifecycleComponent.prototype.ngAfterViewInit = function () {
        this.log('ngAfterViewInit');
        console.log(this.boundParagraph);
    };
    LifecycleComponent.prototype.ngAfterViewChecked = function () {
        this.log('ngAfterViewChecked');
    };
    LifecycleComponent.prototype.ngOnDestroy = function () {
        this.log('ngOnDestroy');
    };
    LifecycleComponent.prototype.log = function (hook) {
        console.log(hook);
    };
    __decorate([
        core_1.Input()
    ], LifecycleComponent.prototype, "bindable");
    __decorate([
        core_1.ViewChild('boundParagraph')
    ], LifecycleComponent.prototype, "boundParagraph");
    __decorate([
        core_1.ContentChild('boundContent')
    ], LifecycleComponent.prototype, "boundContent");
    LifecycleComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-lifecycle',
            template: "\n\t<ng-content></ng-content>\n\t<hr>\n\t<p #boundParagraph>{{bindable}}</p>\n\t<p>{{boundParagraph.textContent}} is a local variable reference</p>\n  ",
            styles: []
        })
    ], LifecycleComponent);
    return LifecycleComponent;
}());
exports.LifecycleComponent = LifecycleComponent;
//# sourceMappingURL=lifecycle.component.js.map