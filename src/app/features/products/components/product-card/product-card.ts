import { Component, input, output } from '@angular/core';
import { Product } from '@/core/models/product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.html',
  styleUrl: './product-card.css',
})
export class ProductCard {
  product = input.required<Product>();
  removeItemEvent = output<number>();

  removeItem() {
    this.removeItemEvent.emit(this.product().id);
  }
}
