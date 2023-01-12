import { Component, OnInit } from '@angular/core';
import { FormGroup, NonNullableFormBuilder, Validators } from '@angular/forms';
import { ControleService } from 'src/app/services/controle.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    descricao: ['', Validators.required],
    valor: ['', Validators.required],
    tipo: ['', Validators.required]
  })

  constructor(
    private controleService: ControleService,
    private formBuilder: NonNullableFormBuilder,
    ) { }

  ngOnInit(): void {
  }

  adicionarMovimento(){
    if(this.form.valid){
      this.controleService.addMovimento(this.form.value)
      this.form.reset()
    }else{
      alert('Preencha todos os campos')
    }
  }

}
