import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Environment } from './environment';

import { UploadService } from './services/upload.service';

import {
  // angular material
  MdButtonModule,
  MdMenuModule,
  MdDialogModule,
  MdInputModule,
  MdCheckboxModule,
  MdProgressSpinnerModule,
  MdProgressBarModule,
  MdTableModule,
  // MdDatepickerModule,
  // MdNativeDateModule,
} from '@angular/material';

// services
import { AuthService } from './auth.service';
import { HasherService } from './services/hasher.service';

// components
import { AppComponent } from './app.component';
import { FrontComponent } from './front.component';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './header.component';
import { BookingComponent } from './booking/booking.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontComponent,
    AdminComponent,
    HeaderComponent,
    BookingComponent,
    LoginComponent,
    UploadComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    BrowserModule,

    // matrial
    MdButtonModule,
    MdMenuModule,
    MdDialogModule,
    MdInputModule,
    // MdDatepickerModule,
    // MdNativeDateModule,
    MdCheckboxModule,
    MdProgressSpinnerModule,
    MdProgressBarModule,
    MdTableModule,

    AngularFireModule.initializeApp(Environment.firebase),
    AngularFireDatabaseModule,

    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: FrontComponent },
      { path: 'admin', component: AdminComponent },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ])
  ],
  providers: [
    AuthService,
    UploadService,
    HasherService,
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    BookingComponent,
    LoginComponent,
  ]
})
export class AppModule {}
