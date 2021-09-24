import { Component, OnInit } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {

  paises:any[]=[];
  usuario = {
    nombre:'David',
    apellido:'Ciro',
    email:'inforfercho@gmail.com',
    pais:'',
    genero:'M'
  }
  constructor(private pais:PaisService) { }

  ngOnInit(): void {

    this.pais.getPaises().subscribe(pais =>{
      
      this.paises=pais;
      this.paises.unshift({
        nombre:'Seleccione valor',
        codigo:''
      });
      console.log(this.paises);
    
    });
  }
  guardar(form:NgForm)
  {
    console.log(form.value);
 
    if (form.invalid){
      Object.values(form.controls).forEach( control => {

        control.markAsTouched();

      });
    }

  }

}
