import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from "./app.component";
import { NavigationbarComponent } from './navigationbar/navigationbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LocalLogin } from './LocalLoginPage/LocalLogin.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationbarComponent,
    LocalLogin
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
