import { Component, OnInit } from '@angular/core';

import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'prueba-tecnica-app';
  words: object[];

  constructor(apiService: ApiService) {
    this.words = apiService.getWords();
  }

  ngOnInit() {}

}
