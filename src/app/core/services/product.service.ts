import { Injectable, computed, signal } from '@angular/core';
import { Product } from '@/core/models/product';
import { PRODUCTS } from '@/core/data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly items = signal<Product[]>(PRODUCTS);

  readonly products = this.items.asReadonly();

  readonly categories = computed(() => [
    ...new Set(this.products().map((product) => product.category)),
  ]);
}
