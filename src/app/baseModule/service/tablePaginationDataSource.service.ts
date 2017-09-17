import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { DataSource } from '@angular/cdk/collections';
import { MdSort, MdPaginator } from '@angular/material';
import { HttpService, ResponseData } from './http.service';
import 'rxjs/add/observable/merge';
import 'rxjs/add/operator/map';


export class TablePaginationDataSourceService extends DataSource<any> {
  private sort: MdSort;
  private paginator: MdPaginator;
  private dataChange: BehaviorSubject<any[]> = new BehaviorSubject<any[]>([]);

  constructor(private httpService: HttpService) {
    super();
  }

  init(sort: MdSort, paginator: MdPaginator) {
    this.sort = sort;
    this.paginator = paginator;
  }

  fetchData({ url }) {
    this.httpService.get({ url })
      .then((res: ResponseData) => {
        if (res.success) {
          let list = res.data.data;
          this.dataChange.next(list);
        }
      });
  };

  connect(): Observable<any[]> {
    const displayDataChanges = [
      this.dataChange,
      this.sort.mdSortChange,
      this.paginator.page,
    ];

    return Observable.merge(...displayDataChanges).map(() => {
      return this.dataChange.value;
    });
  }

  disconnect() { }
}


