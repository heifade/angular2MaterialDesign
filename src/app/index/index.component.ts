import { Component } from '@angular/core';
import { AppConfig } from '../app.config';
import { Router } from "@angular/router";
import { GlobalService } from '../baseModule/service/global.service';
import { MenuItemData } from '../baseModule/component/djd-sidebar-menu/djd-sidebar-menu-item.component';

@Component({
  selector: 'page-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.less']
})
export class PageIndexComponent {
  private title = AppConfig.system.title;
  private menuItemList: Array<MenuItemData> = [{
    text: '一级菜单1', icon: 'chrome_reader_mode', subMenuItemList: [{
      text: '二级菜单1', icon: 'date_range', subMenuItemList: [
        { text: '三级菜单1', icon: 'date_range', url: 'user1' },
        { text: '三级菜单2', icon: 'date_range', url: 'user2' },
        { text: '三级菜单3', icon: 'date_range', url: 'user3' },
      ]
    }, {
      text: '二级菜单2', icon: 'chrome_reader_mode', subMenuItemList: [
        { text: '三级菜单4', icon: 'date_range', url: 'user4' },
        { text: '三级菜单5', icon: 'date_range', url: 'user5' },
        { text: '三级菜单6', icon: 'date_range', url: 'javascript:void(0);' },
      ],
    }]
  }, {
    text: '一级菜单2', icon: 'chrome_reader_mode', subMenuItemList: [
      { text: '二级菜单3', icon: 'date_range', url: 'javascript:void(0);' },
      { text: '二级菜单4', icon: 'date_range', url: 'javascript:void(0);' },
      { text: '二级菜单5', icon: 'date_range', url: 'javascript:void(0);' },
    ]
  }, {
    text: '一级菜单3', icon: 'chrome_reader_mode', url: 'javascript:void(0);'
  }, {
    text: '一级菜单4', icon: 'chrome_reader_mode', url: 'javascript:void(0);'
  }];

  constructor(
    private router: Router,
    private globalService: GlobalService,
  ) {

  }



  onOption() {
    this.globalService.messageDialog.showConfirmMessageDialog({
      title: '登出确认', message: '是否确认登出？', onConfirm: (close) => {


        close();

      }
    });
  }

  onMenuItemClick(e: MenuItemData) {
    this.router.navigateByUrl(e.url);
  }
}
