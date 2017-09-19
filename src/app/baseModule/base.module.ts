
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportModule } from './import.module';


import { HttpService } from './service/http.service';
import { LocalStorageService } from './service/localStorage.service';
import { DjdTable } from './component/djd-table/djd-table.component';
import { DjdTableEdit } from './component/djd-table-edit/djd-table-edit.component';
import { DjdPaginator } from './component/djd-paginator/djd-paginator.component';
import { DjdFormField } from './component/djd-form-field/djd-form-field.component';




@NgModule({
  declarations: [
    DjdTable,
    DjdTableEdit,
    DjdPaginator,
    DjdFormField,
  ],
  entryComponents: [
    // DjdTableEditDialog,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImportModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ImportModule,
    DjdTable,
    DjdTableEdit,
    DjdFormField,
  ],
  providers: [
    LocalStorageService,
    HttpService,
  ]
})


export class BaseModule { }
