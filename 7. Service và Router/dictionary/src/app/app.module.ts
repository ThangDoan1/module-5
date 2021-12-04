import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import {DictionaryService} from "./dictionary.service";

@NgModule({
  declarations: [
    AppComponent,
    DictionaryComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [DictionaryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
