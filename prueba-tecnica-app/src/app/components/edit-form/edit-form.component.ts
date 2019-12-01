import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IWords } from './../../interfaces/api.interface';
import { ApiService } from './../../services/api.service';


@Component({
  selector: 'app-edit-form',
  templateUrl: './edit-form.component.html',
  styleUrls: ['./edit-form.component.scss']
})
export class EditFormComponent implements OnInit {
  word: IWords;

  constructor(
    private apiService: ApiService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.word = null;
   }

  ngOnInit() {
    this.activeRouter.paramMap.subscribe(params => {
      const id = params.get('id');
      this.word = this.apiService.getwordById(id);
    });
  }

  onFormSubmit(word: IWords) {
    this.apiService.setEditWord(word).then(() => {
      this.router.navigate(['/']);
    });
  }
}
