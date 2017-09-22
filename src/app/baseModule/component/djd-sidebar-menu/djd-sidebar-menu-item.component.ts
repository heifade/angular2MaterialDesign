
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

/**
 * 子菜单数据
 */
export class MenuItemData {
  /**
   * 菜单项文字
   */
  public text: string;
  /**
   * 地址
   */
  public url?: string;
  /**
   * 菜单图标
   */
  public icon?: string;
  /**
   * 子菜单列表
   */
  public subMenuItemList?: Array<MenuItemData>;

  public active?: boolean;
  public start?: boolean;
}

@Component({
  selector: '[djd-sidebar-menu-item]',
  styleUrls: ['./djd-sidebar-menu-item.component.less'],
  templateUrl: './djd-sidebar-menu-item.component.html',
  providers: [ ]
})

export class DjdSidebarMenuItem implements OnInit {

  @Input() public menuItemData: MenuItemData;
  @Output() public onMenuItemClick = new EventEmitter<MenuItemData>();

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  onItemClick(menuItemData) {
    this.onMenuItemClick.emit(menuItemData)
  }
}