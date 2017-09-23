
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


interface ILogoIconData {
  url: string,
  icon: string,
  color?: string,
}

@Component({
  selector: 'djd-nav-bar',
  styleUrls: ['./djd-nav-bar.component.less'],
  templateUrl: './djd-nav-bar.component.html',
  providers: [ ]
})

export class DjdNavBar implements OnInit {

  @Input() public title: string;
  @Input() public logo: ILogoIconData;

  @Output() public option = new EventEmitter<any>();

  constructor() {
    
  }

  ngOnInit(): void {

  }

  onOptionClick(e) {
    this.option.emit(e);
  }

}