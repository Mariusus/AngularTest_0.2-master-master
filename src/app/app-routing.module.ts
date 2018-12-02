import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './Home/home.component';
import {ReviewsListComponent} from './reviews/reviews-list/reviews-list.component';
import {ReviewsUpdateComponent} from './reviews/reviews-update/reviews-update.component';
import {ReviewsAddComponent} from './reviews/reviews-add/reviews-add.component';
import {LoginComponent} from './login/login/login.component';
import {AuthGuard} from './shared/guards/auth.guard';
import {DetailsComponent} from './reviews/details/details.component';


const routes: Routes = [
  { path: 'reviews-add', component: ReviewsAddComponent },
  { path: 'reviews-list', component: ReviewsListComponent},


  { path: 'reviews-update/:id', component: ReviewsUpdateComponent},
  { path: 'reviews', component: DetailsComponent},
  { path: '**', redirectTo: '' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
