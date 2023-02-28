import { Component, OnInit } from '@angular/core';
import { TokenPayload } from '../user.model';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  constructor(private authenticationService: AuthenticationService, 
    private router: Router) { }

  ngOnInit(): void {
  }

  loginUser(tokenPayload: TokenPayload) {
    this.authenticationService.loginUser(tokenPayload).subscribe({
      next: (res) => this.router.navigate(['/admin']),
      error: (err) => console.log(err)
    })
  }

}
