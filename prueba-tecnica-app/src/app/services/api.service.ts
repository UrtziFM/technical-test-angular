import { Injectable } from '@angular/core';

import { IWords } from './../interfaces/api.interface';

import { getApiResponse } from './../api/api-mock';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
    public words: IWords[];

  constructor() {
    this.words = [];
    this.getInitialResponse();
  }

  public getInitialResponse(): void {
    getApiResponse().then((response: IWords[]) => {
      response.forEach((word: IWords) => {
        this.words.push(word);
      });
    });
  }

  public getWords(): IWords[] {
    return this.words;
  }

  private checkIds(firstId: string|number, secondId: string|number): boolean {
    return firstId.toString() === secondId.toString()
    }

  public getwordById(id: number|string): IWords {
    return this.words.find((word: IWords) => this.checkIds(word.id, id));
  }

  public setCreateWord(newWord: IWords): Promise<boolean> {
    this.words.push(newWord);

    return Promise.resolve(true);
  }

  public setEditWord(editedWord: IWords): Promise<boolean> {
    this.words.forEach((word: IWords, index: number) => {
      if (this.checkIds(word.id, editedWord.id)) {
        this.words[index] = editedWord;
      }
    });

    return Promise.resolve(true);
  }

  public setDeleteWord(id: number|string): void {
    const indexOfWord = this.words.findIndex(word => this.checkIds(word.id, id));
    this.words.splice(indexOfWord, 1);
  }
}
