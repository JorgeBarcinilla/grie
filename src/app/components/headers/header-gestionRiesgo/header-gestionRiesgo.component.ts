import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "src/app/services/login/auth.service";

@Component({
  selector: "app-header-gestionRiesgo",
  templateUrl: "./header-gestionRiesgo.component.html",
  styleUrls: ["./header-gestionRiesgo.component.css"]
})
export class HeaderGestionRiesgoComponent implements OnInit, OnDestroy {
  title: string;

  constructor(private router: Router, private _authService: AuthService) {}

  ngOnInit() {}

  ngOnDestroy() {}

  changeTitle(titleButton: string) {
    localStorage.setItem("title", titleButton);
    this.title = titleButton;
  }

  cerrarSesion() {
    this._authService.logOut();
  }
}
