// src/app/listar-pessoas/listar-pessoas.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Pessoa {
  id: number;
  nome: string;
  idade: number;
}

@Component({
  selector: 'app-listar-pessoas',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listar-pessoas.component.html',
  styleUrls: ['./listar-pessoas.component.css']
})
export class ListarPessoasComponent {
  pessoas: Pessoa[] = [
    { id: 7, nome: 'João', idade: 4 },
    { id: 2, nome: 'Maria', idade: 4 },
    { id: 3, nome: 'José', idade: 2 }
  ];
}
