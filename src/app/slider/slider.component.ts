import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { PassClass } from '../interfaces/pass-class';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.sass']
})
export class SliderComponent implements OnInit {
  // reviews: FirebaseListObservable < PassClass[] > ;
  reviews: any[] = [];
  public index: number = 0;

  constructor(
    db: AngularFireDatabase,
    private san: DomSanitizer,

  ) {
    db.list('pass-class').subscribe((snapshots) => {
      this.reviews = snapshots;
    })
  }

  sanitize(url: string): SafeStyle {
    return this.san.bypassSecurityTrustStyle("url('"+url+"')")
  }

  navigate(dir: string): void {
    switch (dir) {
      case 'left':
        if(this.index === 0){
          this.index = this.reviews.length
        }
        this.index --;
        break;
      case 'right':
        this.index ++;
        this.index = this.index % this.reviews.length; // if we've gone too high, start from `0` again
        console.log(this.index)
        break;
      default:
    }
  }

  ngOnInit() {}

}
