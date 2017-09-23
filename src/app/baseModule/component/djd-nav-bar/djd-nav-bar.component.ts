
import { Component, OnInit, Input } from '@angular/core';



@Component({
  selector: 'djd-nav-bar',
  styleUrls: ['./djd-nav-bar.component.less'],
  templateUrl: './djd-nav-bar.component.html',
  providers: [ ]
})

export class DjdNavBar implements OnInit {

  @Input() public title: string;
  @Input() public logoUrl: string;


  constructor() {
    
  }


  ngOnInit(): void {
    
  }

}