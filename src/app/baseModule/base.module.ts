
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportModule } from './import.module';


import { HttpService } from './service/http.service';
import { LocalStorageService } from './service/localStorage.service';
import { DjdTable } from './component/djd-table/djd-table.component';
import { DjdTableEdit } from './component/djd-table/djd-table-edit.component';
import { DjdPaginator } from './component/djd-paginator/djd-paginator.component';




@NgModule({
  declarations: [
    DjdTable,
    DjdPaginator,
    DjdTableEdit,
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
  ],
  providers: [
    LocalStorageService,
    HttpService,
  ]
})


export class BaseModule { }
