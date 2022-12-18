import { EventEmitter, Injectable } from '@angular/core';
import { Movimento } from '../models/movimento.interface';

@Injectable({
  providedIn: 'root'
})
export class ControleService{

  emitirNovoMomento = new EventEmitter<Movimento>()
  emitirMovimentoExcluido = new EventEmitter<Movimento>()

  movimentos: Array<Movimento> = JSON.parse(localStorage.getItem("movimentos") || '[]')

  constructor() { }

  getMovimentos(){
    return this.movimentos
  }

  addMovimento(movimento: Movimento){
    this.emitirNovoMomento.emit(movimento)
    this.setLocalStorage()
  }

  deletarMovimento(movimento: Movimento, index: number){
    this.movimentos.splice(index, 1)
    this.emitirMovimentoExcluido.emit(movimento)
    this.setLocalStorage()
  }

  setLocalStorage(){
    localStorage.setItem("movimentos", JSON.stringify(this.movimentos))
  }
}
