
import { Component, ViewChild, OnInit, Input, Inject } from '@angular/core';
import { MdSort, MdPaginator, MdPaginatorIntl, MdDialog, MdDialogRef } from '@angular/material';

import { Http, Response } from "@angular/http";
import { TablePaginationDataSourceService } from '../../service/tablePaginationDataSource.service';

import { G } from '../../../common/G';
import { HttpService, ResponseData } from '../../service/http.service';
// import { DjdTableEditDialog } from './djd-table-edit.component';


/**
 * 字段接口
 */
export interface DjdTableParamsField {
  title: string;
  field: string;
  width?: string;
  textAlign?: string;
}

/**
 * 操作按钮
 */
export interface DjdTableParamsOption {
  title: string;
  icon: string;
  width?: string;
  textAlign?: string;
  doType?: string;
  click?: (e) => void;
}

/**
 * DjdTable 参数接口
 */
export interface DjdTableParams {
  url: string; //url
  fields: Array<DjdTableParamsField>; //字段
  options?: Array<DjdTableParamsOption>; //操作
  getUrlParams?: () => object; //获取url的方法
  fetchData?({ pageIndex, pageSize }): Promise<ResponseData>; // 当本组件定义的API访问方式无法满足需要时，可以自定义API访问方式
}

@Component({
  selector: 'djd-table',
  styleUrls: ['./djd-table.component.less'],
  templateUrl: './djd-table.component.html',
  providers: [ ]
})

export class DjdTable implements OnInit {

  @Input()
  public params: DjdTableParams;

  private isEditing: boolean = false;
  private dataList: Array<any> = [];
  private rowsCount: number;
  private pageSize = G.PageSize;








  constructor(private httpService: HttpService, private dialog: MdDialog) {
  }

  ngOnInit() {
    this.fetchData({ pageIndex: 1, pageSize: G.PageSize });

    
  }

  onPageIndexChanged(pageIndex) {
    this.fetchData({ pageIndex, pageSize: G.PageSize });
  }

  fetchData({ pageIndex, pageSize }) {
    // 当本组件定义的API访问方式无法满足需要时，可以自定义API访问方式
    if (this.params.fetchData) {
      let promise = this.params.fetchData({ pageIndex, pageSize });
      promise.then((res) => {
        if (res.success) {
          let data = res.data;
          this.dataList = data.data;
          this.rowsCount = data.RecordCount;
        }
      });
    }
    else {
      let url = this.params.url;
      url = this.addUrlParam(url, 'PageIndex', pageIndex - 1);
      url = this.addUrlParam(url, 'PageCapacity', pageSize);

      // 向url里添加条件
      let urlParams = this.params.getUrlParams();
      if (urlParams) {
        for (let key in urlParams) {
          url = this.addUrlParam(url, key, urlParams[key]);
        }
      }

      this.httpService.get({ url }).then((res) => {
        if (res.success) {
          let data = res.data;
          this.dataList = data.data;
          this.rowsCount = data.RecordCount;
        }
      });
    }
  }

  private addUrlParam(url, key, value) {
    if (url.indexOf('?') > -1) {
      return url + `&${key}=${value}`;
    }
    else {
      return url + `?${key}=${value}`;
    }
  }

  private optionClick(option, e) {
    switch(option.doType) {
      case 'edit':
        this.onEdit(option, e);
        break;
      case 'delete':
        this.onDelete(option, e);
        break;
    }
    
  }

  onEdit(option, e) { // 点击编辑按钮时触发
    this.isEditing = true;
    console.log(11, e);
  }

  onDelete(option, e) { // 点击删除按钮时触发
    console.log(11, e);
  }

  onCloseEdit(e){ // 关闭编辑页面
    this.isEditing = false;
  }


  onSubmit(e) {
    // console.log(99, this.editForm.value);
  }

  onCancelEdit(e) {
    // this.onCloseEdit.emit();
    this.isEditing = false;
  }
}



