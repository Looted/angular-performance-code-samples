import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartyParrotComponent } from './party-parrot/party-parrot.component';
import { MultiplyAndDividePipe } from './multiply-and-divide.pipe';


@NgModule({
  declarations: [
    AppComponent,
    PartyParrotComponent,
    MultiplyAndDividePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
