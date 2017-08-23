import { Component, OnInit, Inject } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {

  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  times: string[] = ['Morning', 'Midday', 'Afternoon', 'Evening']
  constructor(
    @Inject(MD_DIALOG_DATA) public data: any,
    public dialogRef: MdDialogRef < BookingComponent > ,
  ) { }

  book(): void {
    console.log('booking...')
  }

  close(): void {
    this.dialogRef.close();
  }


  ngOnInit() {
  }

}
