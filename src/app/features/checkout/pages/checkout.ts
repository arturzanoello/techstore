import { Component, inject, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CartService } from '@/core/services/cart.service';
import { Button } from '@/shared/components/button/button';

@Component({
  selector: 'app-checkout',
  imports: [ReactiveFormsModule, CurrencyPipe, RouterLink, Button],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  cartService = inject(CartService);
  private fb = inject(FormBuilder);

  states = [
    'AC',
    'AL',
    'AP',
    'AM',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MT',
    'MS',
    'MG',
    'PA',
    'PB',
    'PR',
    'PE',
    'PI',
    'RJ',
    'RN',
    'RS',
    'RO',
    'RR',
    'SC',
    'SP',
    'SE',
    'TO',
  ];

  isSubmitting = signal(false);
  orderNumber = signal<number | null>(null);

  checkoutForm = this.fb.group({
    contact: this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/)]],
    }),
    address: this.fb.group({
      zipCode: ['', [Validators.required, Validators.pattern(/^\d{5}-?\d{3}$/)]],
      street: ['', Validators.required],
      number: ['', Validators.required],
      complement: [''],
      neighborhood: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
    }),
    payment: this.fb.group({
      method: ['card'],
      card: this.fb.group({
        number: ['', [Validators.required, Validators.pattern(/^(\d{4} ?){3}\d{4}$/)]],
        name: ['', Validators.required],
        expiry: ['', [Validators.required, Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)]],
        cvv: ['', [Validators.required, Validators.pattern(/^\d{3,4}$/)]],
      }),
    }),
  });

  constructor() {
    this.checkoutForm
      .get('payment.method')
      ?.valueChanges.pipe(takeUntilDestroyed())
      .subscribe((method) => {
        const cardGroup = this.checkoutForm.get('payment.card');

        if (method === 'card') {
          cardGroup?.enable();
        } else {
          cardGroup?.disable();
        }
      });
  }

  get isCardPayment() {
    return this.checkoutForm.get('payment.method')?.value === 'card';
  }

  isInvalid(path: string) {
    const control = this.checkoutForm.get(path);
    return !!control && control.invalid && control.touched;
  }

  placeOrder() {
    if (this.checkoutForm.invalid) {
      this.checkoutForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    setTimeout(() => {
      this.orderNumber.set(Math.floor(100000 + Math.random() * 900000));
      this.cartService.clear();
      this.isSubmitting.set(false);
    }, 1500);
  }
}
