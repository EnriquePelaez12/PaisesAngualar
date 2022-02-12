import { ResposePaises } from './../../model/home.model';
import { PaisesService } from './../../services/paises.service';
import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  
  Paises: Array<ResposePaises> = [];
  filterPais = '';
  constructor(
  private ConsultaService :PaisesService,
  private toastr: ToastrService) { }

  ngOnInit() {
    this.ObtenerPaises()
  }
  //Obtener todos los paises
  ObtenerPaises(){
    this.ConsultaService.getDatosServicio().subscribe(
      (response: any) =>{
        localStorage.setItem("paises", JSON.stringify(response))
        console.log(response)
        this.mostrar();
      }),
      (error: HttpErrorResponse) => console.error(error)
  }

//mostra datos del locl
mostrar(){
  this.Paises = JSON.parse(localStorage.getItem("paises"))
}
//Elimina el campo seleccionado
eliminarPais(pais) {
  this.Paises.splice(this.Paises.indexOf(pais), 1);
  this.UpdateLocalStorange();
  this.toastr.success('El Pais fue eliminado con exito', 'Registro eliminado!', {
    positionClass: 'toast-bottom-right'
  });
}
//Actualiza los datos que se encientran en LocalStorange
UpdateLocalStorange() {
  localStorage.setItem('paises', JSON.stringify(this.Paises));
}

}

