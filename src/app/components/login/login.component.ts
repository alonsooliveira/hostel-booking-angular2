import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  providers: [AccountService]
})
export class LoginComponent implements OnInit {

  public user: User = new User();

  constructor(private accountService: AccountService, private router: Router) {

  }

  ngOnInit() {
  }

  submit() {
    this.accountService.login(this.user).subscribe(result => {
      this.router.navigateByUrl('/home');
    });
  }

}
