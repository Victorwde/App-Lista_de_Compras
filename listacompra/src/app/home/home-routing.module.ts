import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutosComponent } from '../produtos/produtos.component';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: 'produtos',
    component: ProdutosComponent,
  },
  {
    path: '',
    component: HomePage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
