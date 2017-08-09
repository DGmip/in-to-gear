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
  selected: string = '';
  enquiries: FirebaseListObservable < any[] > ;
  // enquiry: FirebaseObjectObservable < any > ;

  constructor(
    public dialog: MdDialog,
    db: AngularFireDatabase,
  ) {
    this.enquiries = db.list('/enquiries')
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
    console.log(name, number, email, message)
    // name = 'test';
    // number = '22';
    // email = 'email address';
    // message = 'hello there';
    this.enquiries.push({
      name: name,
      number: number,
      email: email,
      message: message,
      date: this.getDate(),
    })
  }

  ngOnInit() {
    // console.log('dev FrontComponent')
    // setTimeout(() => {
    //   this.openBooking();
    // },200)
  }

}
