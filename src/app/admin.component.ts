import { Component, OnInit, Output } from '@angular/core';
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

  reviews: FirebaseListObservable < any[] > ;
  review: FirebaseObjectObservable <any>;

  user: Observable < firebase.User > ;

  imageSuccess: boolean = false;
  imageUrl: string;

  logged: boolean = false;

  constructor(
    db: AngularFireDatabase,
    public dialog: MdDialog,
    public afAuth: AngularFireAuth,
  ) {
    this.enquiries = db.list('/enquiries')
    this.reviews = db.list('/pass-class')

    this.afAuth.authState.subscribe((user) => {
      console.log('state changed', user)
      if (user) {
        if (user.uid === 'TSCA2oPCjbaRpVlbHFSlQnSxDgP2') {
          this.logged = true;
        }
      }
    })
  }

  changed(ev): void {
    console.log('in admin')
    console.log(ev)
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

  addReview(name: string, location: string, review: string): void {
    if(!this.imageUrl){
      console.error('there was no image hash')
    }
    let obj = {
      name: name,
      location: location,
      review: review,
      url: this.imageUrl,
    }
    // let test = {
    //   name: 'Ben Wall',
    //   location: 'Thanet, Kent',
    //   review: 'It was easy to learn with this driving school - it was a very rewarding experience'
    // }
    this.reviews.push(obj);
    // this.reviews.push(test);
  }

  imageUploaded(url: string): void {
    this.imageSuccess = true;
    this.imageUrl = url;
  }

  deleteReview(key: string): void {
    this.reviews.remove(key)
  }

  getImage(hash): void {
    let ref = firebase.storage().ref('images/'+hash).getDownloadURL()
      .then((data) => {
        console.log('image', data)
        return data
      })
  }

  ngOnInit() {}

}
