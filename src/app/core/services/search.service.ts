import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private readonly term = signal('');

  readonly searchTerm = this.term.asReadonly();

  setTerm(value: string) {
    this.term.set(value);
  }
}
