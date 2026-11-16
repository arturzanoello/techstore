import { CartService } from '@/core/services/cart.service';
import { Component, inject } from '@angular/core';
import { CartCard } from '../components/cart-card/cart-card';
import { Button } from '@/shared/components/button/button';
import { CurrencyPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [CartCard, CurrencyPipe, Button, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);
}
