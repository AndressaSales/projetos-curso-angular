import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CampoControlErro } from '../shared/campo-control-erro/campo-control-erro';

import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-template-form',
  imports: [FormsModule, NgClass, CampoControlErro],
  templateUrl: './template-form.html',
  styleUrl: './template-form.css'
})
export class TemplateForm {



  usuario: any = {
    nome: null,
    email: null
  }
 
  onSubmit(form: any){
    console.log(form);

    //console.log(this.usuario);

    this.http.post(' ', JSON.stringify(form.value))
    .subscribe(dados => console.log(dados));
  }

  constructor( private http: HttpClient ) {}

  verificaValidTouched(campo: any){
    return !campo.valid  && campo.touched;
  }

  aplicaCssErro(campo: any){
    return {
      'is-invalid': this.verificaValidTouched(campo)
    }
  }

  consultaCEP(cep: any){
    //console.log(cepc);
    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Verifica se campo cep possui valor informado.
    if (cep != "") {
       //Expressão regular para validar o CEP.
        var validacep = /^[0-9]{8}$/;

         //Valida o formato do CEP.
          if(validacep.test(cep)) {
            this.http.get(`https://viacep.com.br/ws/${cep}/json`)
            .subscribe(dados => console.log(dados));
          }
    }
  }
  
}
