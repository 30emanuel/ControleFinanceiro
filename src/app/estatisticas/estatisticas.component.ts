import { Component, OnInit } from '@angular/core';
import { Movimento } from '../models/movimento.interface';
import { ControleService } from '../services/controle.service';

@Component({
  selector: 'app-estatisticas',
  templateUrl: './estatisticas.component.html',
  styleUrls: ['./estatisticas.component.css']
})
export class EstatisticasComponent implements OnInit {

  total: number = 0
  totalEntradas: number = 0
  totalSaidas: number = 0

  constructor(private controleService: ControleService) { }

  ngOnInit(): void {
    this.carregarMovimentos(this.controleService.getMovimentos())
    this.controleService.emitirNovoMomento.subscribe( 
      movimento => {this.novoMovimento(movimento)
        console.log(movimento)
      }
    )
    this.controleService.emitirMovimentoExcluido.subscribe( 
      movimento => this.removerMovimento(movimento)
    )
  }

  carregarMovimentos(movimentos: Movimento[]){
    movimentos.forEach(movimento => {
      this.novoMovimento(movimento)
    })
  }

  novoMovimento(movimento: Movimento){
    if(movimento.tipo == 'entrada'){
      this.total += movimento.valor
      this.totalEntradas += movimento.valor
    }else{
      this.total -= movimento.valor
      this.totalSaidas += movimento.valor
    }
  }

  removerMovimento(movimento: Movimento){
    if(movimento.tipo == 'entrada'){
      this.total -= movimento.valor
      this.totalEntradas -= movimento.valor
    }else{
      this.total += movimento.valor
      this.totalSaidas -= movimento.valor
    }
  }

}
