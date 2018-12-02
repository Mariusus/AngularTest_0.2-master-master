import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {ReviewsService} from '../../shared/services/reviews.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-reviews-add',
  templateUrl: './reviews-add.component.html',
  styleUrls: ['./reviews-add.component.css']
})
export class  ReviewsAddComponent implements OnInit {
  reviewForm = new FormGroup( {
  username: new FormControl(''),
 comment: new FormControl( ''),
    rating: new FormControl( '')

});
  constructor(private reviewsService: ReviewsService,
  private router: Router) { }

  ngOnInit() {}

}


