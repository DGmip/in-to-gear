import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import {MD_DIALOG_DATA, MdDialogRef} from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass'],
  providers: [
    AngularFireAuth,
  ]
})
export class LoginComponent implements OnInit {
  user: Observable < firebase.User > ;
  loginState: string = 'login'; // loggedIn / error
  errorMessage: string

  constructor(
    public afAuth: AngularFireAuth,
    public dialogRef: MdDialogRef<LoginComponent>,

  ) {
    this.user = afAuth.authState;
  }

  login(email: string, password: string): void {
    email = 'admin@test.com';
    // password = 'passworad';
    password = 'password';
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(data => {
        console.log(data)
        this.loginState = 'loggedIn';
        setTimeout(() => {
          this.dialogRef.close(data);
        }, 1500)
      })
      .catch(error => {
        this.loginState = 'error';
        if(error['code'] === 'auth/wrong-password'){
          this.errorMessage = 'Wrong email or password';
        }
        setTimeout(() => {
          this.dialogRef.close();
        }, 1500)
      })
  }
  ngOnInit() {}

}
