import { Component, OnInit } from '@angular/core';
import {ReviewsService} from '../../shared/services/reviews.service';
import {ActivatedRoute} from '@angular/router';
import {Review} from '../../shared/models/review';

@Component({
  selector: 'app-reviews-details',
  templateUrl: './reviews-details.component.html',
  styleUrls: ['./reviews-details.component.css']
})
export class DetailsComponent implements OnInit {
  reviews: Review;

  constructor(private route: ActivatedRoute,
              private constReviewsService: ReviewsService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.constReviewsService.getReviewById(id)
      .subscribe(reviewFromRest => {
        this.reviews = reviewFromRest;
      });
  }

}
