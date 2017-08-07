import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgClass } from '@angular/common';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.sass']
})
export class FrontComponent implements OnInit {

  displayType: string = null;

  constructor() { }

  selectInfo(type: string): void {
    this.displayType = type;
  }

  ngOnInit() {
  }

}
