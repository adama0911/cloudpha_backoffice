import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { userModel } from '../model/user.model';
import {Router} from '@angular/router';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public validateForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router,private logService:LoginService) {
  }

  ngOnInit() {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }

  public submitForm(): void {
    this.router.navigateByUrl('/user');
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    console.log(this.validateForm);
    if (this.validateForm.invalid) {
      return;
    } else {

      this.login();
    }
  }
  
  login(){
      userModel.isLogin = true;
      userModel.userName = this.validateForm.value.userName;
      userModel.password = this.validateForm.value.password;
      this.router.navigateByUrl('/user');
      // this.logService.login({userName:this.validateForm.value.userName,password:this.validateForm.value.password}).then(rep => {
      //   console.log(rep)
      //   userModel.isLogin = true;
      //   userModel.userName = this.validateForm.value.userName;
      //   userModel.password = this.validateForm.value.password;
      //   this.router.navigateByUrl('/user');
      // }).catch( err => {
      //   console.log(err)
      // })
  }

}
