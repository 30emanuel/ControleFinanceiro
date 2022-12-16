import { Component, Input, OnInit } from '@angular/core';
import { Movimento } from '../models/movimento.interface';
import { ControleService } from '../services/controle.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  movimentos: Movimento[] = []

  constructor(private controleService: ControleService) { }

  ngOnInit(): void {
    this.movimentos = this.controleService.getMovimentos()
    this.controleService.emitirMovimentoCriado.subscribe(
      
      movimento => {this.movimentos.push(movimento) 
        console.log(this.movimentos)
      console.log('teste')}
    )
  }

}
