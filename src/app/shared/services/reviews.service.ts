import { Injectable } from '@angular/core';
import {User} from '../models/user';
import {environment} from '../../../environments/environment';
import {Observable} from 'rxjs';
import {AuthenticationService} from './authentication.service';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Review} from '../models/review';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {  }

  getReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  addReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review);
  }

  updateReview(reviews: Review): Observable<Review>  {
    return this.http.put<Review>(this.apiUrl + '/' + reviews.id, reviews.username);
  }

  deleteReview(id: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/' + id);
  }

  getReviewById(id: number): Observable<Review> {
    return this.http.get<Review> (this.apiUrl + '/' + id);
  }
}

