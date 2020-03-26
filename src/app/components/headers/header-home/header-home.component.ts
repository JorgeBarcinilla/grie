import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/login/auth.service";

@Component({
  selector: "app-header-home",
  templateUrl: "./header-home.component.html",
  styleUrls: ["./header-home.component.css"]
})
export class HeaderHomeComponent implements OnInit {
  enSesion: boolean;

  constructor(private _authService: AuthService) {}

  ngOnInit() {
    this.enSesion = this._authService.validarToken();
  }

  cerrarSesion() {
    this._authService.logOut();
  }
}
