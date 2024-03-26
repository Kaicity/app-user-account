import {Component, OnInit} from '@angular/core';
import {Account} from "../request-model/account";
import {Router} from "@angular/router";
import {AcountService} from "../api-service/acount-service";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit{
  account : Account = new Account();
  constructor(private router: Router, private as: AcountService) {
  }
  ngOnInit(): void {
  }


  btnSubmit() {
    this.as.getAccount(this.account).subscribe(res => {
      //check out login
      this.router.navigate(['/success']);
    },
      error => {alert("Đăng nhập thất bại !")})
  }
}
