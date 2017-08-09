import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgClass } from '@angular/common';
import { MdDialog } from '@angular/material';
import { BookingComponent } from './booking/booking.component';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.sass'],
  providers: [MdDialog]
})
export class FrontComponent implements OnInit {
  selected: string = '';

  constructor(
    public dialog: MdDialog
  ) {}

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

  ngOnInit() {
    console.log('dev FrontComponent')
    setTimeout(() => {
      this.openBooking();
    },200)
  }

}
