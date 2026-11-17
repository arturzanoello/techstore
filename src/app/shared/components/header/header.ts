import { CartService } from '@/core/services/cart.service';
import { ProductService } from '@/core/services/product.service';
import { SearchService } from '@/core/services/search.service';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartService = inject(CartService);
  searchService = inject(SearchService);
  productService = inject(ProductService);
  private router = inject(Router);

  private currentUrl = toSignal(
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map((event) => event.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  isHomePage = computed(() => this.currentUrl().split('?')[0] === '/');

  cartLabel = computed(() => {
    const count = this.cartService.count();
    return count === 1 ? 'Cart, 1 item' : `Cart, ${count} items`;
  });

  onSearch(value: string) {
    this.searchService.setTerm(value);
  }
}
