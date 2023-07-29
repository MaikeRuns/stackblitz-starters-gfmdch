import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppageComponent } from './shoppage/shoppage.component';
import { HomeComponent } from './home/home.component';
import { TeaserComponent } from './teaser/teaser.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppageComponent,
    HomeComponent,
    TeaserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
