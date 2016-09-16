import { Component } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  template: `
    <input type="text" [(ngModel)]="person.name" />
	<input type="text" [(ngModel)]="person.name" />
	<br><br><br><br><br>
  `
})
export class TwoWayBindingComponent {
  person = {
	name: 'Tom',
	age: 61
  };
}
