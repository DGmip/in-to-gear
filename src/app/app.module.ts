import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Environment } from './environment';

import {
  MdButtonModule,
  MdMenuModule,
  MdDialogModule,
  MdInputModule,
  MdCheckboxModule,
  // MdDatepickerModule,
  // MdNativeDateModule,
} from '@angular/material';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FrontComponent } from './front.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header.component';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AdminComponent,
    HeaderComponent,
    BookingComponent,
  ],
  imports: [
    BrowserAnimationsModule,

    BrowserModule,
    // matrial
    MdButtonModule,
    MdMenuModule,
    MdDialogModule,
    MdInputModule,
    // MdDatepickerModule,
    // MdNativeDateModule,
    MdCheckboxModule,

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
  bootstrap: [AppComponent],
  entryComponents:[BookingComponent]
})
export class AppModule {}
