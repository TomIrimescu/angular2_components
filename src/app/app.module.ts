import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from "./app.component";
import { DatabindingComponent } from './databinding';
import { PropertyBindingComponent } from './databinding';
import { EventBindingComponent } from './databinding';
import { TwoWayBindingComponent } from './databinding';
import { LifecycleComponent } from './lifecycle.component';

@NgModule({
	declarations: [AppComponent, DatabindingComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent, LifecycleComponent],
	imports: [BrowserModule, FormsModule ],
	bootstrap: [AppComponent]
})

export class AppModule {}

