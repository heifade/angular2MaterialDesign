import { Component, Inject, OnInit, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { MdSort, MdPaginator, MdPaginatorIntl, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'djd-table-edit',
  templateUrl: './djd-table-edit.component.html',
})
export class DjdTableEdit implements OnInit {

  private editForm: FormGroup;

  @Output() public onCloseEdit = new EventEmitter();

  constructor() {
      
  }

  ngOnInit() {
    
    

  }

  onSubmit(e) {
    console.log(99, this.editForm.value);
  }

  onCancelEdit(e) {
    this.onCloseEdit.emit();
  }

}