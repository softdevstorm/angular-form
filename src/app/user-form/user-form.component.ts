import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../@core/service/user.service';
import {ValidationService} from '../@core/service/validation.service';
import {SHA1} from "crypto-js";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;
  validPassWord: boolean;
  constructor(private fb: FormBuilder, public userService: UserService) {
    this.validPassWord = true;
  }
  ngOnInit() {
    this.userForm = this.fb.group({
      email: ['', [Validators.required, ValidationService.emailValidator]],
      password: ['', [Validators.required]],
      name: [''],
      cc_number: ['', [Validators.required, ValidationService.creditCardValidator]],
      expire: [''],
      cvc: [''],
    });
  }

  save(): void {
    const pass =  SHA1(this.userForm.controls['password'].value).toString();
    const queryHash =  pass.substring(0, 5);
    const remainingHash = pass.substring(5).toUpperCase();;

    this.userService.validatePassword(queryHash).subscribe(data => {
      if (data.includes(remainingHash)) {
        this.validPassWord  = false;
      }
    });
  }

  reset(): void{
    this.validPassWord = true;
  }

}
