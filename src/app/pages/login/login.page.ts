import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //aquí podemos crear variables, constantes, listas, arreglos, json, etc:
  //NOMBRE_VAR: TIPO = VALOR;
  titulo: string = "PÁGINA DE LOGIN";
  /*numero: number = 5;
  decimal: number = 5.2;
  existe: boolean = true;
  fecha_hoy: Date = new Date();
  nombres: string[] = ["Pedro","Juan","Diego"];
  persona: any = {"nombre":"Jason", "edad":5}*/

  //NgModel:
  email: string = "";
  password: string = "";

  constructor(private router: Router) { }

  ngOnInit() {
  }

  //método asociado al boton para hacer un login:
  login(){
    if(this.email=="" && this.password==""){
      this.router.navigate(['/home'])
    }else{
      alert("¡Correo o contraseña incorrectos!")
    }
  }

}
