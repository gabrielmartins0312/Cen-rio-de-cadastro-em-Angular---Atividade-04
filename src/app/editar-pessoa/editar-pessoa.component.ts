// src/app/editar-pessoa/editar-pessoa.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-editar-pessoa',
  standalone: true,
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css'],
  imports: [CommonModule, RouterModule]
})
export class EditarPessoaComponent implements OnInit {
  pessoaId: number | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.pessoaId = Number(this.route.snapshot.paramMap.get('id'));
  }
}
