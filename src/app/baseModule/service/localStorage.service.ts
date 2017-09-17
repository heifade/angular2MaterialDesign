import { Injectable } from '@angular/core';


/**
 * 本地存储
 */
@Injectable()
export class LocalStorageService {

  /**
   * 保存数据
   * @param key 键
   * @param value 值
   */
  public set<T>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  /**
   * 获取数据
   * @param key 键
   */
  public get<T>(key: string): T {
    let value = localStorage.getItem(key);
    if(value === null) {
      return null;
    }
    if(value === undefined) {
      return undefined;
    }
    return JSON.parse(value) as T;
  }
}