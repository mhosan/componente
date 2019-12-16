import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AccordionModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  //bootstrap: [AppComponent]
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector){
    const el = createCustomElement(AppComponent, { injector });
    customElements.define('mi-boton', el );
  }
  ngDoBootstrap(){}
 }
