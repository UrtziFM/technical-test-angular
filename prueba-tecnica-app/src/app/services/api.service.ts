import { Injectable } from '@angular/core';

import { response } from '../api/words.mock.js';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    public words: object[];

  constructor() { 
    this.words = [];
  }
  public getWords(): object[] {
    return this.words;
  }
  public fetchWords(): void {
    this.words = response;
  }
}
