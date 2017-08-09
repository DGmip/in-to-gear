import { Component, OnInit } from '@angular/core';
import { NgSwitch, NgClass } from '@angular/common';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.sass']
})
export class FrontComponent implements OnInit {
  selected: string = '';

  constructor() { }

  select(card: string): void {
    if(card === this.selected){
      this.selected = '';
      return
    }
    this.selected = card;
  }

  ngOnInit() {
  }

}
