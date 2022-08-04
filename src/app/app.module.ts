import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponentComponent } from './home/home.component';
import { LoginComponentComponent } from './login/login.component';
import { AppRoutingModule } from './app-routing/app-routing.module';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponentComponent,
    LoginComponentComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
