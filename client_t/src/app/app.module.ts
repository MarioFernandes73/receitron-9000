import * as $ from 'jquery';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { StarterService } from './services/starter.service';
import { DescService } from './services/desc.service';

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    HttpModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [{
    provide: LocationStrategy,
    useClass: HashLocationStrategy
  },
  StarterService,
  DescService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
