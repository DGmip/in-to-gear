import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
  providers: [AngularFireAuth]
})
export class AdminComponent implements OnInit {

  items: FirebaseListObservable < any[] > ;
  item: FirebaseObjectObservable < any > ;
  user: Observable < firebase.User > ;

  constructor(
    public afAuth: AngularFireAuth,
    db: AngularFireDatabase,
  ) {
    this.user = afAuth.authState;
    this.items = db.list('/bookings');
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  addBooking(name: string, number: string, message: string, date: string) {
    this.items.push({
      name: name,
      number: number,
      message: message,
      date: date
    });
  }

  updateItem(key: string, newText: string) {
    this.items.update(key, {
      text: newText
    });
  }

  deleteItem(key: string) {
    this.items.remove(key);
  }

  deleteEverything() {
    this.items.remove();
  }

  ngOnInit() {}

}

