import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CdDefaultComponent } from './cd-default/cd-default.component';
import { CdOnpushComponent } from './cd-onpush/cd-onpush.component';
import { InternalChangeComponent } from './shared/internal-change/internal-change.component';
import { InputDrivenChangeComponent } from './shared/input-driven-change/input-driven-change.component';
import { RxjsChangeComponent } from './shared/rxjs-change/rxjs-change.component';
import { PerformaceTestComponent } from './performace-test/performace-test.component';
import { PartyParrotComponent } from './shared/party-parrot/party-parrot.component';

const appRoutes: Routes = [
  { path: 'cd-default', component: CdDefaultComponent },
  { path: 'cd-onpush', component: CdOnpushComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    CdDefaultComponent,
    CdOnpushComponent,
    InternalChangeComponent,
    InputDrivenChangeComponent,
    RxjsChangeComponent,
    PerformaceTestComponent,
    PartyParrotComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
