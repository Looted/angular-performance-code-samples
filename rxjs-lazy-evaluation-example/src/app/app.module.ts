import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PartyParrotComponent } from './party-parrot/party-parrot.component';
import { RowComponent } from './row/row.component';


@NgModule({
  declarations: [
    AppComponent,
    PartyParrotComponent,
    RowComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
