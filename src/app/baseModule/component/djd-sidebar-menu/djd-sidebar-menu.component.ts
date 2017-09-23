
import { Component, OnInit, Input, ContentChildren, QueryList, Output, EventEmitter } from '@angular/core';
import { MenuItemData, DjdSidebarMenuItem } from './djd-sidebar-menu-item.component';



@Component({
  selector: 'djd-sidebar-menu',
  styleUrls: ['./djd-sidebar-menu.component.less'],
  templateUrl: './djd-sidebar-menu.component.html',
  providers: []
})

export class DjdSidebarMenu implements OnInit {

  @Input() menuItemList : Array<MenuItemData>;
  @Output() menuItemClick = new EventEmitter<MenuItemData>();

  constructor() {

  }

  ngOnInit(): void {
    // this.menuItemList = this.getMenuData(this.menuData as [any]);
  }

  // private getMenuData(menuList: [any]): Array<MenuItemData> {
  //   function f(id) {

  //     let menuItemList = Array<MenuItemData>();
  //     menuList.forEach((h) => {
  //       if(h.pid === id) {
  //         let subMenu = f(h.id);

  //         let mData = new MenuItemData();
  //         mData.text = h.text;
  //         mData.url = h.url;
  //         mData.subMenuItemList = subMenu && subMenu.length ? subMenu : undefined,

  //         menuItemList.push(mData);
  //       }
  //     });
  //     return menuItemList;
  //   }

  //   return f('0');
  // }

  private setCurrentMenuItem(menuItemData: MenuItemData) {
    // 给选中的项设置选中标识
    let setActiveMenuItem = (list: Array<MenuItemData>) => {
      if (list) {
        for (let i = 0; i < list.length; i++) {
          let h = list[i];
          if (h == menuItemData) {
            h.active = true;
          }
          else {
            h.active = false;
          }
          delete h.activePath;
          setActiveMenuItem(h.subMenuItemList);
        }
      }
    }
    setActiveMenuItem(this.menuItemList);

    // 给选中的项的叶子节点设置标识
    let setPathActiveMenuItem = (list: Array<MenuItemData>) => {
      if (list) {
        for (let i = 0; i < list.length; i++) {
          let h = list[i];

          if (setPathActiveMenuItem(h.subMenuItemList)) {
            h.activePath = true;
            return true;
          }

          if (h.active) {
            return true;
          }
        }
      }
    }
    setPathActiveMenuItem(this.menuItemList);

  }

  private onMenuItemClick(menuItemData) {
    this.setCurrentMenuItem(menuItemData);

    this.menuItemClick.emit(menuItemData);
  }

}