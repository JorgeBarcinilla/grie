import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-modal-agregar-edificio',
  templateUrl: './modal-agregar-edificio.component.html',
  styleUrls: ['./modal-agregar-edificio.component.css']
})
export class ModalAgregarEdificioComponent implements OnInit {

  
  formEdificios = new FormGroup({
    numero: new FormControl('',Validators.required),
    pisos: new FormControl('',Validators.required),
    salones: new FormControl('')
  })

  formTipoSalon = new FormGroup({
    cantidad: new FormControl('',Validators.required),
    tipoSalon: new FormControl('',Validators.required)
  })

  listaTiposSalones = ['Almacen', 'Auditorio', 'Baño', 'Biblioteca', 'Bodega', 'Cafetería', 'Canchas y/o polideportivo', 'Cocina', 'Comedor', 'Enfermería', 'Gimnasio', 'Laboratorio', 'Oficina', 'Parqueadero', 'Punto de primeros auxilios','Sala de informática', 'Sala de profesores', 'Salon', 'Salón de arte', 'Garitas (vigilancia)']
  listaSalones = []
  
  constructor(public dialogRef: MatDialogRef<ModalAgregarEdificioComponent>) { }

  ngOnInit() {

  }

  agregarSalon(){
    this.listaSalones.unshift(this.formTipoSalon.value);
    this.formEdificios.get("salones").setValue(this.listaSalones)
    this.formTipoSalon.reset()
  }
  eliminarSalon(chip){
    this.listaSalones = this.listaSalones.filter(salon => {return salon.tipoSalon != chip.tipoSalon});
    this.formEdificios.get("salones").setValue(this.listaSalones);
  }

  guardarEdificio(){
    this.dialogRef.close(this.formEdificios.value);
  }
}
