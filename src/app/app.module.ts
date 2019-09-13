import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ThemeModule} from './@theme/theme.module';
import {CoreModule} from './@core/core.module';
import { MatCardModule} from '@angular/material';
import {UserFormModule} from './user-form/user-form.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {NgxMaskModule} from 'ngx-mask';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ThemeModule,
    MatCardModule,
    UserFormModule,
    BrowserAnimationsModule,
    CoreModule.forRoot(),
    HttpClientModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
