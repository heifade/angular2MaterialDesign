
import { MdPaginatorIntl } from '@angular/material';
import { Subject } from '_rxjs@5.4.3@rxjs/Subject';

export class PaginatorIntl extends MdPaginatorIntl {
  itemsPerPageLabel = "每页行数";
  nextPageLabel = "下一页";
  previousPageLabel = "上一页";




  

  getRangeLabel = (page: number, pageSize: number, length: number) : string => {
    if (length === 0 || pageSize === 0) {
      return `共${length}行，当前显示第0行`;
    }
    length = Math.max(length, 0);
    const startIndex = page * pageSize;
    // If the start index exceeds the list length, do not try and fix the end index to the end.
    const endIndex = startIndex < length ?
      Math.min(startIndex + pageSize, length) :
      startIndex + pageSize;
    return `共${length}行，当前显示第${startIndex + 1} - ${endIndex}行`;
  }
}