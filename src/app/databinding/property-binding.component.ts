import { Component, Input } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-property-binding',
  template: `
    example <strong>COMPONENT</strong> Property Binding with <strong>@Input()</strong>  {{result}}
  `,
  styles: []
})
export class PropertyBindingComponent {
  @Input() result: number = 0;
}


