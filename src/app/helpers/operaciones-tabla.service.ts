import { Injectable } from "@angular/core";
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from "@angular/forms";

@Injectable({
  providedIn: "root"
})
export class OperacionesTablaService {
  constructor(private fb: FormBuilder) {}

  buildForm(formGroup: FormGroup, dataTable: any) {
    dataTable.forEach(row => {
      let controls = {};
      let groups = row.formGroup;
      if (Array.isArray(groups)) {
        groups.forEach(group => {
          group.formControls.forEach(control => {
            controls[control] = new FormControl("", Validators.required);
          });
          formGroup.addControl(group.name, this.fb.group(controls));
        });
      } else {
        if (Array.isArray(groups.formControls)) {
          groups.formControls.forEach(control => {
            controls[control] = new FormControl("", Validators.required);
          });
          formGroup.addControl(groups.name, this.fb.group(controls));
        }
      }
    });
  }
}
