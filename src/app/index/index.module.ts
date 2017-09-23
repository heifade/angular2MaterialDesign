
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { indexRoutes } from './index.routes';
import { RouterModule } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { BaseModule } from '../baseModule/base.module';


import { UserComponent } from '../user/user.component';
import { PageIndexComponent } from './index.component';

@NgModule({
  declarations: [
    PageIndexComponent,
    UserComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BaseModule,


    RouterModule.forRoot(indexRoutes)
  ],
  providers: [],
})
export class IndexModule { }
