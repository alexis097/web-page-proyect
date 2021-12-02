import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [ContactoComponent],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    ReactiveFormsModule
  ]
})
export class ContactoModule { }
