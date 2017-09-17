
import { Component, ViewChild, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';
import { G } from '../../../common/G';

@Component({
  selector: 'djd-paginator',
  styleUrls: ['./djd-paginator.component.less'],
  templateUrl: './djd-paginator.component.html',
  providers: []
})

export class DjdPaginator implements OnInit, OnChanges {

  @Input() public pageIndex: number = 1; // 当前页号
  @Input() public rowsCount: number; // 数据总行数
  @Input() public pageSize: number;  // 分页大小

  @Output() public onChange = new EventEmitter<number>();

  private pageCount: number = 0;
  private pageList = []; //显示的按钮数字

  constructor() {

  }

  ngOnInit() {
    this.refresh();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if("rowsCount" in changes) {
      let value = changes.rowsCount.currentValue;
      if(value !== undefined) {
        this.rowsCount = value;
        this.refresh();
      }
    }
  }

  pageClick(pageIndex) {
    if(this.pageIndex !== pageIndex) {
      this.pageIndexChange(pageIndex);
    }
  };

  pageOne() {
    if(this.pageIndex !== 1) {
      this.pageIndexChange(1);
    }
  };

  pageUp() { //上一页
    if (this.pageIndex > 1) {
      this.pageIndexChange(this.pageIndex - 1);
    }
  };

  pageDown() {//下一页
    if (this.pageIndex !== this.pageCount) {
      this.pageIndexChange(this.pageIndex + 1);
    }
  };

  pageLast() {
    if(this.pageIndex !== this.pageCount) {
      this.pageIndexChange(this.pageCount);
    }
  };

  pageIndexChange(pageIndex) {
    this.pageIndex = pageIndex;
    this.refresh();
    this.onChange.emit(this.pageIndex);
  }

  refresh() {
    this.pageCount = Math.ceil(this.rowsCount / this.pageSize); //总页数
    var pageButtons = 10;//显示几个数字按钮
    pageButtons = pageButtons > this.pageCount ? this.pageCount : pageButtons;
    var pageButtonStart = this.pageIndex;

    if (pageButtonStart + pageButtons > this.pageCount) {
      pageButtonStart = this.pageCount - pageButtons + 1;
    }

    this.pageList = [];
    for (var i = pageButtonStart, j = this.pageCount; i <= j && i <= pageButtonStart + pageButtons - 1; i++) {
      this.pageList.push({ index: i });
    }
  }

}
