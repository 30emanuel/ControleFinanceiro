import { Component, OnInit } from '@angular/core';
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

  adicionarMovimento(form: any){
    if(form.valid){ 
      this.controleService.addMovimento(form.value)
      form.form.reset()
    }else{
      alert('Preencha todos os campos')
    }
  }

}
