
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ImportModule } from './import.module';


import { HttpService } from './service/http.service';
import { LocalStorageService } from './service/localStorage.service';
import { GlobalService } from './service/global.service';

import { DjdTable } from './component/djd-table/djd-table.component';
import { DjdTableEdit } from './component/djd-table-edit/djd-table-edit.component';
import { DjdPaginator } from './component/djd-paginator/djd-paginator.component';
import { DjdFormField } from './component/djd-form-field/djd-form-field.component';
import { DjdWait } from './component/djd-wait/djd-wait.component';
import { DjdMessageDialog, DjdMessage } from './component/djd-message-dialog/djd-message-dialog.component';
import { DjdSidebarMenu } from './component/djd-sidebar-menu/djd-sidebar-menu.component';




@NgModule({
  declarations: [
    DjdTable,
    DjdTableEdit,
    DjdPaginator,
    DjdFormField,
    DjdWait,
    DjdMessage,
    DjdMessageDialog,
    DjdSidebarMenu,
  ],
  entryComponents: [
    DjdMessageDialog,
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
    DjdWait,
    DjdMessage,
    DjdMessageDialog,
    DjdSidebarMenu,
  ],
  providers: [
    LocalStorageService,
    HttpService,
    GlobalService,
  ]
})


export class BaseModule { }
