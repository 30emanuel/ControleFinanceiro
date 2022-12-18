import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { FormsModule } from '@angular/forms';
import { ControleService } from 'src/app/services/controle.service';
import { EstatisticasComponent } from 'src/app/estatisticas/estatisticas.component';
import { FormComponent } from 'src/app/form/form.component';
import { ListaComponent } from 'src/app/lista/lista.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    ListaComponent,
    EstatisticasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [ControleService]
})
export class DashboardModule { }
