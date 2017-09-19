
import { Component, ViewChild, OnInit, Input, Inject } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'djd-table-edit',
  styleUrls: ['./djd-table-edit.component.less'],
  templateUrl: './djd-table-edit.component.html',
  providers: [ ]
})

export class DjdTableEdit implements OnInit {

  private editForm: FormGroup;

  ngOnInit(): void {

    this.editForm = new FormGroup({
      "AdminCode": new FormControl('',
        [
          Validators.required,
        ]
      ),
      "AdminName": new FormControl('',
        [
          Validators.required,
        ]
      ),
      "Gender": new FormControl('',
        [
          Validators.required,
        ]
      ),
      "PhoneNo": new FormControl('',
        [
          Validators.required,
        ]
      ),
      "Birthday": new FormControl('',
        [
          Validators.required,
        ]
      ),
      "CardNo": new FormControl('',
        [
          Validators.required,
        ]
      ),
    });
    
  }

}