import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-campo-control-erro',
  imports: [],
  templateUrl: './campo-control-erro.html',
  styleUrl: './campo-control-erro.css'
})
export class CampoControlErro {
  @Input() msgErro: string = '';
  @Input() mostrarErro: boolean = true;
}
