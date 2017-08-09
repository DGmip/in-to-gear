import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Environment } from './environment';

import {
  MdButtonModule,
  MdMenuModule,
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontComponent } from './front.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AdminComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,

    BrowserModule,
    // matrial
    MdButtonModule,
    MdMenuModule,

    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireDatabaseModule,

    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: FrontComponent },
      { path: 'admin', component: AdminComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
