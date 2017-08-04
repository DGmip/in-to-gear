import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  sections = [];

  sectionsFact(name: string, anchor: string): void {
    let obj = {
      name: name,
      anchor: anchor
    }
    this.sections.push(obj)
  }

  constructor() {
    this.sectionsFact('Lessons', 'lessons')
    this.sectionsFact('Book', 'book')
    this.sectionsFact('Tests', 'tests')
    this.sectionsFact('Pass class', 'pass')
    this.sectionsFact('Contact', 'contact')
  }

  ngOnInit() {
  }

}
