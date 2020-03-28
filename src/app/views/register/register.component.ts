import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/login/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  formRegister = new FormGroup({
    username: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });
  
  constructor(private router: Router, private _authService: AuthService) { }

  ngOnInit() {
  }

  submit(){
    this._authService.signUp(this.formRegister.value);
  }

}
