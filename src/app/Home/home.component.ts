import { Component, OnInit } from '@angular/core';
import {ReviewsService} from '../shared/services/reviews.service';
import {Review} from '../shared/models/review';

@Component({
  selector: 'app-welcome',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Spaghetti';

  constructor(private reviewService: ReviewsService) {
  }
reviews: Review[];
  ngOnInit() {
    // get users from secure api end point
    this.reviewService.getReviews()
      .subscribe(
        items => {
          this.reviews = items;
        }
      );
  }
}

