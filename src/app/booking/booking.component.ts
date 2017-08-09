import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {

  days: string[] = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  times: string[] = ['Morning', 'Midday', 'Afternoon', 'Evening']

  constructor(
  ) { }

  ngOnInit() {
  }

}
