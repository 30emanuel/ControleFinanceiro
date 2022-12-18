import { Component, OnInit } from '@angular/core';
import { Movimento } from '../models/movimento.interface';
import { ControleService } from '../services/controle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {


  constructor(private controleService: ControleService) { }

  ngOnInit(): void {
  }

  adicionarMovimento(form: any, movimento: Movimento){
    if(form.valid){ 
      this.controleService.addMovimento(movimento)
    }else{
      alert('Preencha todos os campos')
    }
  }

}
