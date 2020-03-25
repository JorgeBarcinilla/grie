import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private _authService: AuthService) { }

  formLogin = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  ngOnInit() {
  }

  submit() {
    this._authService.signIn(this.formLogin.value);
    
  }

}
