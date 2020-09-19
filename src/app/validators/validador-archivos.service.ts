import { Injectable } from "@angular/core";
import { SwalAlertService } from "../utils/swalAlert.service";

@Injectable({
  providedIn: "root",
})
export class ValidadorArchivosService {
  constructor(private _swalAlertService: SwalAlertService) {}

  validarArchivo(file: any) {
    console.log(file.size / 1024 / 1204);
    if (file.size / 1024 / 1204 <= 2) {
      // menor a 10 MB
      return 200; // fine
    } else {
      this._swalAlertService.info(
        "Tamaño excedido",
        "El archivo que intentas subir tiene un peso superior a 2MB"
      );
      return 500; // invalid size
    }
  }

  validarImagen(file: File): number {
    let tipo: any = file.type.toLowerCase();
    if (
      tipo == "image/gif" ||
      tipo == "image/jpeg" ||
      tipo == "image/jpg" ||
      tipo == "image/png"
    ) {
      if (file.size / 1024 / 1204 <= 2) {
        // menor a 10 MB
        return 200;
      } else {
        this._swalAlertService.info(
          "Tamaño excedido",
          "El archivo que intentas subir tiene un peso superior a 2MB"
        );
        return 500; // invalid size
      }
    } else {
      this._swalAlertService.info(
        "Formato incorrecto",
        "El formato de la imagen no es correcto, verifica que la extensión del archivo sea (.png .jpg .jpeg)"
      );
      return 300;
    }
  }

  obtenerExtension(format: string) {
    if (format == "application/msword") {
      return "doc";
    } else if (
      format ==
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ) {
      return "docx";
    } else if (format == "text/plain") {
      return "txt";
    } else if (format == "application/pdf") {
      return "pdf";
    } else if (format == "application/vnd.ms-excel") {
      return "xls";
    } else if (
      format ==
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      return "xlsx";
    } else if (format == "application/vnd.ms-powerpoint") {
      return "ppt";
    } else if (
      format ==
      "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    ) {
      return "pptx";
    } else if (format == "image/jpeg") {
      return "jpeg";
    } else if (format == "image/jpg") {
      return "jpg";
    } else if (format == "image/png") {
      return "png";
    } else if (format == "image/gif") {
      return "gif";
    } else if (format == "application/x-zip-compressed") {
      return "zip";
    } else if (format == "video/x-ms-wmv") {
      return "wmv";
    } else if (format == "video/x-flv") {
      return "flv";
    } else if (format == "video/mp4") {
      return "mp4";
    } else if (format == "") {
      return "rar";
    }
  }
}
