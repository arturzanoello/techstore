import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './layout/header/header';
import { Product } from './core/models/product';
import { ProdutoCard } from './features/products/components/produto-card/produto-card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProdutoCard, Header],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  products: Product[] = [
    {
      id: 1,
      name: 'MacBook Pro 14',
      description: 'Apple laptop with M4 chip, 16GB RAM and 512GB SSD.',
      category: 'Laptops',
      brand: 'Apple',
      price: 1599.99,
      stock: 12,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    },
    {
      id: 2,
      name: 'iPhone 16 Pro',
      description: 'Apple smartphone with advanced camera system and A18 Pro chip.',
      category: 'Smartphones',
      brand: 'Apple',
      price: 999.99,
      stock: 25,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600',
    },
    {
      id: 3,
      name: 'Galaxy S25 Ultra',
      description: 'Samsung flagship smartphone with a 200MP camera.',
      category: 'Smartphones',
      brand: 'Samsung',
      price: 1299.99,
      stock: 8,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=600',
    },
    {
      id: 4,
      name: 'AirPods Pro 2',
      description: 'Wireless earbuds with active noise cancellation.',
      category: 'Accessories',
      brand: 'Apple',
      price: 249.99,
      stock: 40,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600',
    },
    {
      id: 5,
      name: 'Sony WH-1000XM5',
      description: 'Premium wireless headphones with noise cancellation.',
      category: 'Audio',
      brand: 'Sony',
      price: 349.99,
      stock: 18,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600',
    },
    {
      id: 6,
      name: 'Logitech MX Master 3S',
      description: 'Wireless ergonomic mouse designed for productivity.',
      category: 'Accessories',
      brand: 'Logitech',
      price: 99.99,
      stock: 32,
      rating: 4.8,
      imageUrl: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600',
    },
    {
      id: 7,
      name: 'Mechanical Gaming Keyboard',
      description: 'RGB mechanical keyboard with customizable switches.',
      category: 'Accessories',
      brand: 'Keychron',
      price: 129.99,
      stock: 15,
      rating: 4.6,
      imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=600',
    },
    {
      id: 8,
      name: 'Dell UltraSharp 27',
      description: '27-inch 4K monitor with IPS display technology.',
      category: 'Monitors',
      brand: 'Dell',
      price: 549.99,
      stock: 10,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=600',
    },
    {
      id: 9,
      name: 'PlayStation 5',
      description: 'Sony gaming console with ultra-high-speed SSD.',
      category: 'Gaming',
      brand: 'Sony',
      price: 499.99,
      stock: 7,
      rating: 4.9,
      imageUrl: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=600',
    },
    {
      id: 10,
      name: 'iPad Air',
      description: 'Apple tablet with powerful performance and Liquid Retina display.',
      category: 'Tablets',
      brand: 'Apple',
      price: 599.99,
      stock: 20,
      rating: 4.7,
      imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600',
    },
  ];

  removeItem(id: number) {
    this.products = this.products.filter((item) => item.id !== id);
  }
}
