import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import { Http, Headers, Request, RequestOptions, RequestOptionsArgs, Response, RequestMethod, URLSearchParams } from '@angular/http';
import { LocalStorageService } from './localStorage.service';

/**
 * 请求返回结果
 */
export class ResponseData {
  public success: boolean;
  public resultCode: number;
  public message: string;
  public data: any;
}

/**
 * Http服务
 */
@Injectable()
export class HttpService {

  public static keyToken: string = "LocalStorageToken";

  constructor(private http: Http, private localStorageService: LocalStorageService) { }

  private get token(): string {
    return this.localStorageService.get<string>(HttpService.keyToken);
  }

  /**
   * 发启一个get请求
   * @param url url地址
   * @param params 参数
   */
  get({ url, headers = new Headers() }): Promise<ResponseData> {
    return this.ask({ method: 'get', url, headers });
  }

  post({ url, headers = new Headers(), body = {} }): Promise<ResponseData> {
    return this.ask({ method: 'post', url, headers, body });
  }

  // upload(url, body={}): Promise<ResponseData> {

  //   let headers = new Headers();
  //   headers.append("x-access-token", this.token);

  //   let params: RequestOptionsArgs = {
  //     headers: headers
  //   }

  //   return this.http
  //     .post(url, body, params)
  //     .toPromise()

  // }

  ask({ method = "post", url, headers = new Headers(), body = {} }): Promise<ResponseData> {

    let params: RequestOptionsArgs = {};

    if (!headers.has('Content-Type')) {
      headers.append('Content-Type', 'application/json; charset=UTF-8');
    }
    headers.append("x-access-token", this.token);

    params.headers = headers;

    let response: Observable<Response>;

    switch (method.toLocaleLowerCase().trim()) {
      case 'get':
        response = this.http.get(url, params);
        break;
      case 'post':
      default:
        response = this.http.post(url, body, params);
        break;
    }

    return response
      .toPromise()
      .then((res: Response) => {
        let json = res.json();

        let resData = new ResponseData();
        let { description, result, ...other } = json;

        resData.message = description;
        resData.resultCode = result;

        if (result === 0) {
          resData.success = true;
          resData.data = other;
          return Promise.resolve(resData);
        }
        else {
          resData.success = false;
          resData.data = other;
          return Promise.resolve(resData);
        }
      })
      .catch((e) => {
        let resData = new ResponseData;
        resData.success = false;

        let body = e._body ? JSON.parse(e._body): {};
        resData.message = body.Message ? body.Message : e.statusText;
        resData.data = e;
        return Promise.resolve(resData);
      });

      
  }



  

}
