import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  template: `

	<p>DOM Event Binding</p>
	<button (click)="onSubmitted()">Click me!</button>    
    <hr>
    <p>Custom Event Binding on <strong>BLUR</strong> with <strong>@Output()</strong></p>
    <button (blur)="onBlitzen()">No me!</button>    
	  `,
  styles: []
})
export class EventBindingComponent {

	onSubmitted(){
		alert('Event Binding on DOM click event property!')
	}

	@Output() clicked = new EventEmitter<string>();
	onBlitzen(){
		this.clicked.emit('Event Binding on CUSTOM blur event property!');
	}

}
