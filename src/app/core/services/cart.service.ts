import { Injectable, computed, signal } from '@angular/core';
import { Product } from '@/core/models/product';
import { CartItem } from '@/core/models/cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private readonly items = signal<CartItem[]>([]);

  readonly cartItems = this.items.asReadonly();

  readonly count = computed(() => this.items().reduce((total, item) => total + item.quantity, 0));

  readonly totalPrice = computed(() =>
    this.items().reduce((total, item) => total + item.product.price * item.quantity, 0),
  );

  addProduct(product: Product) {
    this.items.update((items) => {
      const alreadyInCart = items.some((item) => item.product.id === product.id);

      if (alreadyInCart) {
        return items.map((item) =>
          item.product.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...items, { product, quantity: 1 }];
    });
  }

  removeProduct(productId: number) {
    this.items.update((items) => items.filter((item) => item.product.id !== productId));
  }
}
