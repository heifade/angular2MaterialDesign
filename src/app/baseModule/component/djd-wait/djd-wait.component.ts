
import { Component, OnInit, Input } from '@angular/core';
import { GlobalService } from '../../service/global.service';



@Component({
  selector: 'djd-wait',
  styleUrls: ['./djd-wait.component.less'],
  templateUrl: './djd-wait.component.html',
  providers: [ ]
})

export class DjdWait implements OnInit {

  private isVisible: boolean;

  constructor(private globalService: GlobalService) {
    globalService.wait = this;
  }

  public setVisible(isVisible: boolean) {
    this.isVisible = isVisible;
  }

  ngOnInit(): void {
    
  }

}