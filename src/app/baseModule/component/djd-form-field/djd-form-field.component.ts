
import { Component, ViewChild, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'djd-form-field',
  styleUrls: ['./djd-form-field.component.less'],
  templateUrl: './djd-form-field.component.html',
  providers: [ ]
})

export class DjdFormField implements OnInit {

  @Input() public form: FormGroup;
  @Input() public label: string;
  @Input() public controlName: string;
  

  ngOnInit(): void {

  }
}