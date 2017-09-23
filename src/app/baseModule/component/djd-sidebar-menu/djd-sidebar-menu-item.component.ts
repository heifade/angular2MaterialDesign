
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AbstractControl } from '@angular/forms';

declare var $: any;

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

  /**
   * 是否为当前选中叶子节点
   */
  public active?: boolean;
  /**
   * 是否为当前选中叶子节点的路径节点
   */
  public activePath?: boolean;
}

@Component({
  selector: 'djd-sidebar-menu-item',
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

  onSubMenuClick(menuItemData, e: Event) {
    let $a = $(e.target);
    let $li = $a.closest('li');
    if(!$li.hasClass('open')) {
      $li.addClass('open');
      $li.children('ul').slideDown('fast');
      $a.find('.arrow').addClass('open');
    }
    else {
      $li.removeClass('open');
      $li.children('ul').slideUp('fast');
      $a.find('.arrow').removeClass('open');
    }
    
    
  }
}