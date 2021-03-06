
import { Component, ViewChild, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { HttpService, ResponseData } from '../baseModule/service/http.service';
import { DjdTableParams } from '../baseModule/component/djd-table/djd-table.component';

@Component({
  selector: 'app-user',
  styleUrls: ['./user.component.css'],
  templateUrl: './user.component.html',
})
export class UserComponent implements OnInit {

  
  private params: DjdTableParams;
  

  constructor(private httpService: HttpService) {
    this.params = {
      
      dataTable: {
        url: "/api/User/HTAdmin?SearchPart=",
        fields: [
          { title: '用户名', field: 'AdminCode' },
          { title: '姓名', field: 'AdminName' },
          { title: '性别', field: 'Gender' },
          { title: '电话号码', field: 'PhoneNo' },
          { title: '身份证号', field: 'CardNo' },
        ],
        options: [
          { title: '编辑', icon: 'open_in_new', doType: 'edit' },
          { title: '删除', icon: 'delete_forever', doType: 'delete' },
        ],
        getUrlParams: (): object => {
          return {
            key1: 1
          }
        },
      },
      detail: {
        title: '用户资料',
        controls: [
          ["AdminCode", new FormControl('',
            [
              Validators.required,
            ]
          )],
          ["AdminName", new FormControl('',
            [
              Validators.required,
            ]
          )],
          ["Gender", new FormControl('',
            [
              Validators.required,
            ]
          )],
          ["PhoneNo", new FormControl('',
            [
              Validators.required,
            ]
          )],
          ["Birthday", new FormControl('',
            [
              Validators.required,
            ]
          )],
          ["CardNo", new FormControl('',
            [
              Validators.required,
            ]
          )]
        ],
      }
      
      
    

      // fetchData: ({pageIndex, pageSize}): Promise<ResponseData> => {
      //   let url = `${this.params.url}&PageIndex=${pageIndex - 1}&PageCapacity=${pageSize}`;
      //   return new Promise<ResponseData>((resolve, reject) => {
      //     this.httpService.get({ url }).then((res) => {
      //       if (res.success) {
      //         resolve(res);
      //       }
      //     });
      //   });
      // }
    }
  }

  

  


  ngOnInit() {

    
    
    

  }

  
}
