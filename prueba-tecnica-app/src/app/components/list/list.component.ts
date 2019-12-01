import { IWords } from './../../interfaces/api.interface';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  words: IWords[];

  constructor(private apiService: ApiService) {
    this.words = this.apiService.getWords();
  }

  ngOnInit() {}

  onClickDeleteWord(id: number) {
    this.apiService.setDeleteWord(id);
  }
}