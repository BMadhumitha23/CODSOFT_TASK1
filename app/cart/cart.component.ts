// cart.component.ts

import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { CartService } from '../service/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: any[] = [];
  totalAmount: number = 0;

  constructor(
    private router: Router,
    private cartService: CartService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.items = this.cartService.getItems();
      this.calculateTotalAmount();
    }
  }

  deleteItem(index: number) {
    this.cartService.removeFromCart(index);
    if (isPlatformBrowser(this.platformId)) {
      this.items = this.cartService.getItems();
      this.calculateTotalAmount();
    }
  }

  calculateTotalAmount() {
    this.totalAmount = this.items.reduce((total, item) => {
      const price = parseFloat(item.price.replace(/[^\d.]/g, ''));
      return isNaN(price) ? total : total + price;
    }, 0);
  }

  goToTicketPage(movieTitle: string, screen: string, price: string, imageUrl: string) {
    this.router.navigate(['/ticket'], { queryParams: { movieTitle, screen, price, imageUrl } });
  }
}
