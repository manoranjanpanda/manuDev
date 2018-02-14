import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ZoomableDirective } from 'ng2-zoomable';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ZoomableDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
