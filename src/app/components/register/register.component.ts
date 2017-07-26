import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../services/account.service';
import { Router } from '@angular/router';
import { Guest } from '../../models/guest';
import { User } from '../../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  providers: [AccountService]
})
export class RegisterComponent implements OnInit {

  public guest: Guest = new Guest();

  constructor(private accountService: AccountService, private router: Router) {
    this.guest.User = new User();
  }

  ngOnInit() {
  }

  submit() {
    console.log(this.guest);
    this.accountService.register(this.guest).subscribe(result => {
      this.router.navigateByUrl('/');
    });
  }
}
