import { Component, Input, OnInit } from '@angular/core';
import { Movimento } from 'src/app/models/movimento.interface';
import { ControleService } from 'src/app/services/controle.service';

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
    this.controleService.emitirNovoMomento.subscribe(
      movimento => this.movimentos.push(movimento)
    )
  }

  deletarMovimento(movimento: Movimento, index: number){
    this.controleService.deletarMovimento(movimento, index)
  }
}
