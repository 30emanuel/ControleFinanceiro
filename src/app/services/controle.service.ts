import { EventEmitter, Injectable } from '@angular/core';
import { Movimento } from '../models/movimento.interface';

@Injectable({
  providedIn: 'root'
})
export class ControleService {

  emitirMovimentoCriado = new EventEmitter<Movimento>()

  private movimentos: Movimento[] = [
    {descricao: 'teste', valor: 4535345, tipo: 'entrada'}
  ]

  constructor() { }

  getMovimentos(){
    return this.movimentos
  }

  addMovimento(movimento: Movimento){
    this.emitirMovimentoCriado.emit(movimento)
  }

}
