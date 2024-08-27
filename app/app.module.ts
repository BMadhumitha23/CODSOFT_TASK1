import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// Components
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';
import { TheatersComponent } from './theaters/theaters.component';
import { HomeComponent } from './home/home.component';
import { TicketBookingComponent } from './ticket-booking/ticket-booking.component';
import { CartComponent } from './cart/cart.component';
import { SuccessComponent } from './success/success.component';
import { SignupComponent } from './signup/signup.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

// Services
import { CartService } from './service/cart.service';
import { TicketService } from './ticket-booking/ticket.service';

// Routing Configuration
const routes: Routes = [
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: HomeComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'theaters', component: TheatersComponent },
  { path: 'ticket', component: TicketBookingComponent },
  { path: 'cart', component: CartComponent },
  { path: 'success', component: SuccessComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: '', redirectTo: '/signup', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: '/signup' } // Fallback route for undefined paths
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    TheatersComponent,
    HomeComponent,
    TicketBookingComponent,
    CartComponent,
    SuccessComponent,
    SignupComponent,
    ContactUsComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [CartService, TicketService],
  bootstrap: [AppComponent]
})
export class AppModule { }
