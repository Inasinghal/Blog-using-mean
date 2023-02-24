import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  user = new User();

  constructor() { }

  ngOnInit(): void {
  }

  loginUser() {
    console.log(this.user);
  }

}
