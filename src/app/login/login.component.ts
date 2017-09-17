import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from "@angular/router";
import { LoginService } from './login.service';
// import { G } from '../../common/G';

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
    public element: ElementRef,
    public router: Router,
    public loginService: LoginService,
  ) {

  }

  ngOnInit() {
    this.initFormGroup();
  }

  initFormGroup() {
    this.loginForm = new FormGroup({
      "userName": new FormControl('djd',
        [
          Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(6),
          // intValidator(),
          // floatValidator(),
          // maxValidator(100),
          // minValidator(10),
        ]
      ),
      "password": new FormControl('djd',
        [
          Validators.required,
          // Validators.minLength(1),
          // Validators.maxLength(6),
          // intValidator(),
          // floatValidator(),
          // maxValidator(100),
          // minValidator(10),
        ]
      ),
      // "picture": new FormControl('',
      //   [
      //     Validators.required,
      //     // Validators.minLength(1),
      //     // Validators.maxLength(6),
      //     // intValidator(),
      //     // floatValidator(),
      //     // maxValidator(100),
      //     // minValidator(10),
      //   ]
      // )
    });
  }

  login($event) {

    // G.messageBoxComponent.showWarn ({message: '删除确认'});


    // G.waitComponent.show();
    this.loginService.login({
      data: this.loginForm.value,
      onSuccess: () => {
        // this.globalService.hideWaitBox();
        // G.waitComponent.hide();
        this.router.navigateByUrl('user');
      }
    });
  }

}





