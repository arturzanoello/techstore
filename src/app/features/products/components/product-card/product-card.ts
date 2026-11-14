import { Component, input, output } from '@angular/core';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Product } from '@/core/models/product';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, NgOptimizedImage],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  addProductToCartEvent = output<Product>();

  addProductToCart() {
    this.addProductToCartEvent.emit(this.product());
  }
}
