import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { MdDialog } from '@angular/material';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [
    AngularFireAuth,
  ]
})

export class AdminComponent implements OnInit {

  enquiries: FirebaseListObservable < any[] > ;
  enquiry: FirebaseObjectObservable < any > ;

  passClass: FirebaseListObservable < any[] > ;

  user: Observable < firebase.User > ;

  logged: boolean = false;

  constructor(
    db: AngularFireDatabase,
    public dialog: MdDialog,
    public afAuth: AngularFireAuth,
  ) {
    this.enquiries = db.list('/enquiries')
    this.passClass = db.list('/pass-class')
    this.afAuth.authState.subscribe((user) => {
      console.log('state changed', user)
      if (user.uid === 'TSCA2oPCjbaRpVlbHFSlQnSxDgP2') {
        this.logged = true;
      }
    })
  }

  login(email: string, password: string) {
    let dialogRef = this.dialog.open(LoginComponent, {
      height: '100%',
      width: '100%',
    });
    dialogRef.afterClosed().subscribe(user => {
      // signInWithEmailAndPassword(email, password) returns firebase.Promise containing non-null firebase.User
      console.log('got', user.uid)
      if (user.uid === 'TSCA2oPCjbaRpVlbHFSlQnSxDgP2') {
        this.logged = true;
      }
    })
  }

  logout() {
    this.afAuth.auth.signOut()
      .then(data => {
        console.log('Logged out', data)
        this.logged = false;
      })
  }

  updateEnquiry(key: string, newText: string) {
    this.enquiries.update(key, {
      text: newText
    });
  }

  deleteEnquiry(key: string) {
    this.enquiries.remove(key);
  }

  deleteEverything() {
    this.enquiries.remove();
  }

  ngOnInit() {}

}
