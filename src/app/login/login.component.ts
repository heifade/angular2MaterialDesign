import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from './login.service';
import { GlobalService } from '../baseModule/service/global.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers: [LoginService],
})

export class LoginComponent implements OnInit {
  public loginForm: FormGroup;

  @Output()
  public onLogin = new EventEmitter<Object>();

  constructor(
    private element: ElementRef,
    private router: Router,
    private loginService: LoginService,
    private globalService: GlobalService,
    private formBuilder: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    this.loginForm = this.formBuilder.group({
      "userName": ['',[Validators.required,]],
      "password": ['',[Validators.required,]],
    });
  }

  login($event) {

    // G.messageBoxComponent.showWarn ({message: '删除确认'});


    // 

    // this.globalService.messageDialog.showInfoMessageDialog({message: "您好！"});
    // this.globalService.messageDialog.showWarnMessageDialog({message: '警告'});
    // this.globalService.messageDialog.showErrorMessageDialog({message: '出错了！'});
    // this.globalService.messageDialog.showConfirmMessageDialog({message: "是否确定删除？"});


    this.globalService.wait.setVisible(true);
    this.loginService.login({
      data: this.loginForm.value,
      onSuccess: () => {
        this.globalService.wait.setVisible(false);
        this.router.navigateByUrl('index');
      },
      onError: (msg) => {
        this.globalService.wait.setVisible(false);
        this.globalService.messageDialog.showErrorMessageDialog({message: msg});
      }
    });


  }

}





