import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  formLogin: FormGroup = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  ngOnInit() {
  }

  submit() {
    this.router.navigate(['home']);
  }

}
