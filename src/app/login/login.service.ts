
import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { HttpService, ResponseData } from '../baseModule/service/http.service';
import { LocalStorageService } from '../baseModule/service/localStorage.service';

@Injectable()
export class LoginService {

  constructor(private httpService: HttpService, private localStorageService: LocalStorageService) {

  }

  public login({ data: { userName, password }, onSuccess }) {
    let url = '/api/User/AdminLogin';

    this.httpService.post({
      url, body: {
        PhoneNo: userName,
        Password: password,
      }
    }).then((res: ResponseData) => {
      if(res.success) {
        this.localStorageService.set(HttpService.keyToken, res.data.TokenCode);
        onSuccess();
      }
      else {
        console.log(55, res);
      }
    });
  }
}