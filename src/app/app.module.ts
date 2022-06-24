import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Jsa1Component } from './jsa1/jsa1.component';
import { FormsModule } from '@angular/forms';
import { Jsa2Component } from './jsa2/jsa2.component';

@NgModule({
  declarations: [
    AppComponent,
    Jsa1Component,
    Jsa2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
