import { CartService } from '@/core/services/cart.service';
import { Component, inject } from '@angular/core';
import { CartCard } from '../components/cart-card/cart-card';

@Component({
  selector: 'app-cart',
  imports: [CartCard],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  cartService = inject(CartService);
}
