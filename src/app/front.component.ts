import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgClass } from '@angular/common';
import { MdDialog } from '@angular/material';
import { BookingComponent } from './booking/booking.component';

import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.sass'],
  providers: [MdDialog]
})
export class FrontComponent implements OnInit {
  contactState: string = 'ready'; // sent / loading / error / sent
  selected: string = '';

  enquiries: FirebaseListObservable < any[] > ;

  reviews: FirebaseListObservable < any[] > ;

  constructor(
    public dialog: MdDialog,
    db: AngularFireDatabase,
  ) {
    this.reviews = db.list('pass-class');
    this.enquiries = db.list('enquiries')
  }

  select(card: string): void {
    if (card === this.selected) {
      this.selected = '';
      return
    }
    this.selected = card;
  }

  openBooking(): void {
    let dialogRef = this.dialog.open(BookingComponent, {
      height: '100%',
      width: '100%',
    });

  }

  getDate(): number {
    return Date.now();
  }

  addEnquiry(name: string, number: string, email: string, message: string): void {
    this.contactState = 'loading';
    // name = 'Ben'
    // number = '077240402'
    // email = 'bwall256@gmail.com'
    // message = 'I want driving lessons can you please call me'
    this.enquiries.push({
      name: name,
      number: number,
      email: email,
      message: message,
      date: this.getDate(),
    })
    .then(() => {
      this.contactState = 'sent';
    })
    .catch(error => {
      this.contactState = 'error';
    })
  }

  ngOnInit() {
    // console.log('dev FrontComponent')
    // setTimeout(() => {
    //   this.openBooking();
    // },200)
  }

}
