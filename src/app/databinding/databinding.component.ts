import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: 'databinding.component.html',
  styleUrls: ['databinding.component.css']
})
export class DatabindingComponent {
	stringInterpolationForPropertyBinding = 'String bound to DOM value property';
	stringInterpolation = 'The next output is number interpolation!';
	numberInterpolation = 2;

  onTest(){
    return true;
  }

	onBlitzen(value: string){
		alert(value);
	}
}


