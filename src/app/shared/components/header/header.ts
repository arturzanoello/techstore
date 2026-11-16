import { CartService } from '@/core/services/cart.service';
import { Component, computed, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  cartService = inject(CartService);

  cartLabel = computed(() => {
    const count = this.cartService.count();
    return count === 1 ? 'Cart, 1 item' : `Cart, ${count} items`;
  });
}
