// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarPessoasComponent } from './listar-pessoas/listar-pessoas.component';
import { EditarPessoaComponent } from './editar-pessoa/editar-pessoa.component';

const routes: Routes = [
  { path: 'admin/pessoas', component: ListarPessoasComponent },
  { path: 'admin/pessoas/editar/:id', component: EditarPessoaComponent },
  { path: '', redirectTo: '/admin/pessoas', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
