import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {

  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  times: string[] = ['Morning', 'Midday', 'Afternoon', 'Evening']

  book(): void {
    console.log('booking...')
  }

  constructor(
  ) { }

  ngOnInit() {
  }

}
