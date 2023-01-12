import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ControleService } from 'src/app/services/controle.service';
import { FormComponent } from './form/form.component';
import { ListaComponent } from './lista/lista.component';
import { EstatisticasComponent } from './estatisticas/estatisticas.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FormComponent,
    ListaComponent,
    EstatisticasComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  providers: [ControleService]
})
export class DashboardModule { }
