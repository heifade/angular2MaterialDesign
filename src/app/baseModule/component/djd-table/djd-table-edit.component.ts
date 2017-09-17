import { Component, Inject } from "@angular/core";
import { MdSort, MdPaginator, MdPaginatorIntl, MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';



@Component({
  selector: 'djd-table-edit',
  templateUrl: './djd-table-edit.component.html',
})
export class DjdTableEditDialog {

  constructor(
    public dialogRef: MdDialogRef<DjdTableEditDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) {
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}