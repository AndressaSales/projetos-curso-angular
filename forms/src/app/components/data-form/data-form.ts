import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-form',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './data-form.html',
  styleUrl: './data-form.css'
})
export class DataForm {
  formulario: FormGroup | undefined;

  constructor(private formBuilder: FormBuilder ){}

  ngOnInit(){
    /*this.formulario = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)
    });*/

    this.formulario = this.formBuilder.group({
      nome: [null],
      email: [null],
    });
  }
}
