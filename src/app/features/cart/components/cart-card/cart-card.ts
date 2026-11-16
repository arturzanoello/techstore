import { CartItem } from '@/core/models/cart';
import { Component, input, output } from '@angular/core';
import { NgOptimizedImage, CurrencyPipe } from '@angular/common';
import { Product } from '@/core/models/product';

@Component({
  selector: 'app-cart-card',
  imports: [NgOptimizedImage, CurrencyPipe],
  templateUrl: './cart-card.html',
  styleUrl: './cart-card.css',
})
export class CartCard {
  itemCart = input.required<CartItem>();
  increaseItemEvent = output<Product>();
  decreaseItemEvent = output<CartItem>();

  increaseItem() {
    this.increaseItemEvent.emit(this.itemCart().product);
  }

  decreaseItem() {
    this.decreaseItemEvent.emit(this.itemCart());
  }
}
