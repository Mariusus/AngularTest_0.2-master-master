import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsListComponent } from './reviews/reviews-list/reviews-list.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './Home/home.component';
import { DetailsComponent } from './reviews/details/details.component';
import { ReviewsAddComponent } from './reviews/reviews-add/reviews-add.component';
import { ReviewsUpdateComponent } from './reviews/reviews-update/reviews-update.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { LoginComponent } from './login/login/login.component';
import {User} from './shared/models/user';
import {AuthenticationService} from './shared/services/authentication.service';
import {AuthGuard} from './shared/guards/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    ReviewsListComponent,
    NavbarComponent,
    HomeComponent,
    DetailsComponent,
    ReviewsAddComponent,
    ReviewsUpdateComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    User
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
