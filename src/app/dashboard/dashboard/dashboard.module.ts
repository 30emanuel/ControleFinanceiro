import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormComponent } from 'src/app/form/form.component';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from 'src/app/lista/lista.component';
import { ControleService } from 'src/app/services/controle.service';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    ListaComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ControleService]
})
export class DashboardModule { }
