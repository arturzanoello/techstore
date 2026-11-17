import { Component, computed, inject, input } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '@/core/models/product';
import { CartService } from '@/core/services/cart.service';
import { ProductService } from '@/core/services/product.service';
import { SearchService } from '@/core/services/search.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  category = input<string>();

  cartService = inject(CartService);
  private productService = inject(ProductService);
  private searchService = inject(SearchService);

  filteredProducts = computed(() => {
    const term = this.searchService.searchTerm().trim().toLowerCase();
    const category = this.category();

    return this.productService.products().filter((product) => {
      const matchesCategory = !category || product.category === category;

      const matchesSearch =
        !term ||
        product.name.toLowerCase().includes(term) ||
        product.brand.toLowerCase().includes(term) ||
        product.category.toLowerCase().includes(term);

      return matchesCategory && matchesSearch;
    });
  });

  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
