"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var EventBindingComponent = (function () {
    function EventBindingComponent() {
        this.clicked = new core_1.EventEmitter();
    }
    EventBindingComponent.prototype.onSubmitted = function () {
        alert('Event Binding on DOM click event property!');
    };
    EventBindingComponent.prototype.onBlitzen = function () {
        this.clicked.emit('Event Binding on CUSTOM blur event property!');
    };
    __decorate([
        core_1.Output()
    ], EventBindingComponent.prototype, "clicked");
    EventBindingComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-event-binding',
            template: "\n\n\t<p>DOM Event Binding</p>\n\t<button (click)=\"onSubmitted()\">Click me!</button>    \n    <hr>\n    <p>Custom Event Binding on <strong>BLUR</strong> with <strong>@Output()</strong></p>\n    <button (blur)=\"onBlitzen()\">No me!</button>    \n\t  ",
            styles: []
        })
    ], EventBindingComponent);
    return EventBindingComponent;
}());
exports.EventBindingComponent = EventBindingComponent;
//# sourceMappingURL=event-binding.component.js.map