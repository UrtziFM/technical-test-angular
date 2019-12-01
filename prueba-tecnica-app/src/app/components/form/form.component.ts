import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import uuid from 'uuid';

import { IWordForm } from './../../interfaces/form.interface';
import { IWords } from './../../interfaces/api.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  @Input() id: number | string = null;

  @Input() image: string = '';
  @Input() nameEs: string = '';
  @Input() definitionEs: string = '';
  @Input() nameEn: string = '';
  @Input() definitionEn: string = '';

  @Output() formHandler = new EventEmitter<IWords>();

  wordForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.wordForm = this.formBuilder.group({
      image: [this.image],
      nameEs: [this.nameEs],
      definitionEs: [this.definitionEs],
      nameEn: [this.nameEn],
      definitionEn: [this.definitionEn]
    });
  }

  formatFormValues(values: IWordForm): IWords {
    return {
      id: this.id !== null ? this.id : uuid(), 
      image: values.image,
      es: {
        name: values.nameEs,
        description: values.definitionEs
      },
      en: {
        name: values.nameEn,
        description: values.definitionEn
      }
    };
  }

  onFormSubmit(values: IWordForm) {
    const wordValue: IWords = this.formatFormValues(values);
    this.formHandler.emit(wordValue);
  }
}
