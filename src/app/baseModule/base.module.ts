
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ImportModule } from './import.module';


import { HttpService } from './service/http.service';
import { LocalStorageService } from './service/localStorage.service';
import { DjdTable } from './component/djd-table/djd-table.component';
import { DjdTableEditDialog } from './component/djd-table/djd-table-edit.component';
import { DjdPaginator } from './component/djd-paginator/djd-paginator.component';




@NgModule({
  declarations: [
    DjdTable,
    DjdPaginator,
    DjdTableEditDialog,
  ],
  entryComponents: [
    DjdTableEditDialog,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ImportModule,
  ],
  exports: [
    ImportModule,
    DjdTable,
    DjdTableEditDialog,
  ],
  providers: [
    LocalStorageService,
    HttpService,
  ]
})


export class BaseModule { }
