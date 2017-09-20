
import { Component, OnInit, Input, Inject } from '@angular/core';
import { MdDialog, MdDialogRef, MD_DIALOG_DATA } from '@angular/material';
import { GlobalService } from '../../service/global.service';

interface Button {
  text: string;
  click: (close: () => void) => void;
}

export interface DjdMessageParams {
  title: string;
  message: string;
  icon: string;
  iconColor: string;
  width?: string;
  height?: string;
  buttons: Array<Button>;
}

@Component({
  selector: 'djd-message',
  template: '<div></div>',
  providers: []
})

export class DjdMessage implements OnInit {

  private isVisible: boolean;

  constructor(private globalService: GlobalService, private dialog: MdDialog) {
    globalService.messageDialog = this;
  }

  /**
   * 消息提示框
   * @param param 参数
   */
  public show(params: DjdMessageParams) {
    const dialogRef = this.dialog.open(DjdMessageDialog, {
      height: params.width || '200px',
      width: params.height || '300px',
      disableClose: true,
      data: params,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  /**
   * 消息提示框
   * @param param 参数
   */
  public showInfoMessageDialog(param: {message: string, title?: string}) {
    let params = {
      title: param.title || '提示',
      message: param.message,
      icon: 'info_outline',
      iconColor: '#5cbb5c',
      buttons: [
        {text: '确定', click: (close) => { close(); }},
      ]
    }
    this.show(params);
  }

  /**
   * 错误提示框
   * @param param 参数
   */
  public showErrorMessageDialog(param: {message: string, title?: string}) {
    let params = {
      title: param.title || '错误',
      message: param.message,
      icon: 'highlight_off',
      iconColor: '#ff0000',
      buttons: [
        {text: '确定', click: (close) => { close(); }},
      ]
    }
    this.show(params);
  }

  /**
   * 警告提示框
   * @param param 参数
   */
  public showWarnMessageDialog(param: {message: string, title?: string}) {
    let params = {
      title: param.title || '警告',
      message: param.message,
      icon: 'error_outline',
      iconColor: '#f0ad4e',
      buttons: [
        {text: '确定', click: (close) => { close(); }},
      ]
    }
    this.show(params);
  }

  /**
   * 问题确认框
   * @param param 参数
   */
  public showConfirmMessageDialog(param: {message: string, title?: string}) {
    let params = {
      title: param.title || '请确认',
      message: param.message,
      icon: 'help_outline',
      iconColor: '#d9534f',
      buttons: [
        {text: '确定', click: (close) => { close(); }},
        {text: '取消', click: (close) => { close(); }},
      ]
    }
    this.show(params);
  }




  ngOnInit(): void {

  }

}


@Component({
  selector: 'djd-message-dialog',
  templateUrl: './djd-message-dialog.component.html',
  styleUrls: ['./djd-message-dialog.component.less'],
})
export class DjdMessageDialog {

  public params: DjdMessageParams;

  constructor(
    public dialogRef: MdDialogRef<DjdMessageDialog>,
    @Inject(MD_DIALOG_DATA) public data: any) {

    this.params = data;
  }

  onButtonClick(e, button: Button) {
    if(button.click) {
      button.click(() => {
        this.dialogRef.close();
      });
    }
  }



}