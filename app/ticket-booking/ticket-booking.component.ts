import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-booking',
  templateUrl: './ticket-booking.component.html',
  styleUrls: ['./ticket-booking.component.css']
})
export class TicketBookingComponent implements OnInit {
  name: string = '';
  idNumber: string = '';
  movieTitle: string = '';
  screen: string = '';
  price: string = '';
  date: string = '';
  time: string = '';
  seats: number = 1;
  seatType: string = 'ac';
  amount: string = '';
  successMessage: string = '';
  movieImageUrl: string = ''; // Property for movie image URL

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.movieTitle = params['movieTitle'] || '';
      this.screen = params['screen'] || '';
      this.price = params['price'] || '';
      this.movieImageUrl = params['imageUrl'] || ''; // Set the image URL
    });
  }

  onSubmit() {
    // Logic to handle form submission
    this.successMessage = 'Ticket purchased successfully!';
  }

  updateAmount() {
    const basePrice = parseFloat(this.price.substring(1)); // Removing $
    const seatTypeMultiplier = this.seatType === 'ac' ? 1.2 : 1;
    this.amount = `$${(basePrice * this.seats * seatTypeMultiplier).toFixed(2)}`;
  }

  calculateAmount() {
    this.updateAmount();
  }
}
