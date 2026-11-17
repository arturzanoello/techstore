import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';
import { RouterLink } from '@angular/router';
import { Button } from '@/shared/components/button/button';

@Component({
  selector: 'app-about',
  imports: [NgOptimizedImage, RouterLink, Button],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  protected readonly lineup = [
    {
      category: 'Laptops',
      name: 'Apple MacBook Pro 14"',
      imageUrl:
        'https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp',
    },
    {
      category: 'Smartphones',
      name: 'Samsung Galaxy S10',
      imageUrl:
        'https://cdn.dummyjson.com/product-images/smartphones/samsung-galaxy-s10/thumbnail.webp',
    },
    {
      category: 'Tablets',
      name: 'iPad Mini 2021',
      imageUrl:
        'https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp',
    },
    {
      category: 'Audio',
      name: 'Apple AirPods Max',
      imageUrl:
        'https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp',
    },
  ];

  protected readonly values = [
    {
      title: 'Brands you already trust',
      text: "We stock Apple, Samsung, Lenovo and other names with a track record, so you're not gambling on a no-name gadget.",
    },
    {
      title: 'Specs before sales talk',
      text: 'Every product leads with what the device actually does: screen, chip, battery. Decide on facts, not adjectives.',
    },
    {
      title: 'Totals you can see',
      text: 'Your cart keeps a running total in reais as you add items, so the number at checkout is the number you already saw.',
    },
  ];
}
