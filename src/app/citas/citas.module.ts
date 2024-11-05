import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CitasComponent } from './citas/citas.component';
import { PrecapturaComponent } from './precaptura/precaptura.component';
import { SolicitanteComponent } from './solicitante/solicitante.component';
import { CitadoComponent } from './citado/citado.component';
import { RevisionComponent } from './revision/revision.component';
import { SedeComponent } from './sede/sede.component';
import { AgendaComponent } from './agenda/agenda.component';



@NgModule({
  declarations: [
    CitasComponent,
    PrecapturaComponent,
    SolicitanteComponent,
    CitadoComponent,
    RevisionComponent,
    SedeComponent,
    AgendaComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CitasModule { }
