import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginUserData = { email: '', password: '' };

  constructor(private _auth: AuthService, private _router: Router) {}

  ngOnInit(): void {}

  login() {
    this._auth.loginUser(this.loginUserData).subscribe(
      (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/premium']);
      },
      (err) => console.log(err)
    );
    //console.log(this.loginUserData);
  }
}
