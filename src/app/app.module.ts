import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MaterialModule } from './shared/material.module'
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainContentComponent } from './main-content/main-content.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { YahooService } from './services/yahoo.service';

import { Weather } from './models/weather'
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    MainContentComponent,
    SideNavComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    BrowserModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    YahooService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
