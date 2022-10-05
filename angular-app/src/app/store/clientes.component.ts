import { Component, OnInit } from '@angular/core';
import { Clientes } from './cliente';
import { CLIENTES } from './clientes.json';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
})
export class ClientesComponent implements OnInit {

  clientes!: Clientes[];

  constructor() { }

  ngOnInit() {
    this.clientes = CLIENTES;
  }

}
