import { Component, OnInit } from '@angular/core';
import {User} from '../../shared/models/user';
import {ReviewsService} from '../../shared/services/reviews.service';
import {Review} from '../../shared/models/review';

@Component({
  selector: 'app-customers-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css']
})
export class ReviewsListComponent implements OnInit {
  review: Review[];


  constructor(private reviewsservice: ReviewsService) { }
  ngOnInit() {
  this.reviewsservice.getReviews().subscribe  (listReviews => {this.review = listReviews; });
  }
}
