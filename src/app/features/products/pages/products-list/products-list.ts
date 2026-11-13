import { Component, signal, inject } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { Product } from '@/core/models/product';
import { CartService } from '@/core/services/cart.service';

@Component({
  selector: 'app-products-list',
  imports: [ProductCard],
  templateUrl: './products-list.html',
  styleUrl: './products-list.css',
})
export class ProductsList {
  products: Product[] = [
    {
      id: 1,
      name: 'Samsung Galaxy S10',
      description:
        'Smartphone com tela Dynamic AMOLED de 6,1", câmera tripla e leitor de digital ultrassônico.',
      category: 'Smartphones',
      brand: 'Samsung',
      price: 2499.9,
      stock: 42,
      rating: 4.6,
      imageUrl:
        'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp',
    },
    {
      id: 2,
      name: 'Apple AirPods Max Prata',
      description:
        'Fone over-ear com cancelamento de ruído ativo, áudio espacial e até 20 horas de bateria.',
      category: 'Áudio',
      brand: 'Apple',
      price: 4999.0,
      stock: 12,
      rating: 4.8,
      imageUrl:
        'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp',
    },
    {
      id: 3,
      name: 'Nike Air Jordan 1 Vermelho e Preto',
      description: 'Tênis de cano alto em couro, com amortecimento Air e solado de borracha.',
      category: 'Calçados',
      brand: 'Nike',
      price: 1299.99,
      stock: 0,
      rating: 4.7,
      imageUrl:
        'https://cdn.dummyjson.com/product-images/mens-shoes/nike-air-jordan-1-red-and-black/thumbnail.webp',
    },
    {
      id: 4,
      name: 'Apple MacBook Pro 14" Cinza-espacial',
      description: 'Notebook com chip Apple, tela Liquid Retina XDR e até 18 horas de bateria.',
      category: 'Notebooks',
      brand: 'Apple',
      price: 15999.0,
      stock: 7,
      rating: 4.9,
      imageUrl:
        'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp',
    },
    {
      id: 5,
      name: 'Lenovo Yoga 920',
      description: 'Notebook 2 em 1 conversível com tela touch de 13,9" e caneta ativa.',
      category: 'Notebooks',
      brand: 'Lenovo',
      price: 6849.0,
      stock: 18,
      rating: 4.3,
      imageUrl: 'https://cdn.dummyjson.com/product-images/laptops/lenovo-yoga-920/thumbnail.webp',
    },
    {
      id: 6,
      name: 'iPad Mini 2021 Estelar',
      description:
        'Tablet com tela Liquid Retina de 8,3", chip A15 Bionic e suporte à Apple Pencil.',
      category: 'Tablets',
      brand: 'Apple',
      price: 4299.0,
      stock: 25,
      rating: 4.5,
      imageUrl:
        'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp',
    },
  ];

  cartService = inject(CartService);

  addProductToCart(product: Product) {
    this.cartService.addProduct(product);
  }
}
