import { Component, OnInit } from '@angular/core';
import {ReviewsService} from '../../shared/services/reviews.service';
import {ActivatedRoute} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-reviews-update',
  templateUrl: './reviews-update.component.html',
  styleUrls: ['./reviews-update.component.css']
})
export class ReviewsUpdateComponent implements OnInit {
  id: number;
  reviewForm = new FormGroup({
    name: new FormControl(''),
    userid: new FormControl(''),
    productid: new FormControl(''),
    rating: new FormControl(''),
    comment: new FormControl('')


  });

  ngOnInit() {
  }

}

