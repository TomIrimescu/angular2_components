import { Component } from '@angular/core';


@Component({
	moduleId: module.id,
	selector: 'app-root',
	template: `
		<h1>Root Component</h1>
		<h3> Template HTML</h3>
		<app-databinding></app-databinding>
<!-- this commented code is for the Component Lifecycle Usage Examples-->
		<!--<app-lifecycle *ngIf="!delete" [bindable]="boundValue">-->
			<!--<p #boundContent>{{test}}</p>-->
		<!--</app-lifecycle>-->
		<!--<button (click)="test = 'Changed value'">Click to Change Content</button>-->
		<!--<button (click)="boundValue = 2000">Click to Change Binding</button>-->
		<!--<button (click)="delete = true">Click to Delete</button>-->
	`
})
export class AppComponent {
/* this commented code is for the Component Lifecycle Usage Examples*/
/*	delete = false;
	test = 'Starting value';
	boundValue = 1000;*/
}
