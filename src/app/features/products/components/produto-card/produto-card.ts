import { Component, input, output } from '@angular/core';
import { Product } from '../../../../core/models/product';

@Component({
  selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.html',
  styleUrl: './produto-card.css',
})
export class ProdutoCard {
  product = input.required<Product>();
  removeItemEvent = output<number>();

  removeItem() {
    this.removeItemEvent.emit(this.product().id);
  }
}
