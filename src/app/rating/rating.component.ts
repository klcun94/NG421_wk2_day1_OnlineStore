import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  @Input() rating: number;

  stars: number[] = [];
  noStars: number[] = [];
  readonly MAX_RATING: number = 5;

  constructor() { }

  ngOnInit() {
    for (let i = 0; i < this.MAX_RATING ; i++) {
      if (i < this.rating) {
        this.stars.push(i);
      } else {
        this.noStars.push(i);
      }
    }
  }
}
