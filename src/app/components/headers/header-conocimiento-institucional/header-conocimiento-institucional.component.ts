import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/services/login/auth.service";

@Component({
  selector: "app-header-conocimiento-institucional",
  templateUrl: "./header-conocimiento-institucional.component.html",
  styleUrls: ["./header-conocimiento-institucional.component.css"]
})
export class HeaderConocimientoInstitucionalComponent implements OnInit {
  constructor(private _authService: AuthService) {}

  ngOnInit() {}

  cerrarSesion() {
    this._authService.logOut();
  }
}
