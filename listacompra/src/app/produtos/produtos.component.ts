import { Component, OnInit } from '@angular/core';
import { Produto } from '../home/Produto';
import { Guid } from 'guid-typescript';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.scss'],
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[];
  forms: any;


  constructor() { }

  ngOnInit(): void {
    this.ExibirProdutos();
    this.produtos = [];
    this.forms = new FormGroup({
      produtoid: new FormControl(),
      nome: new FormControl(),
      quantidade: new FormControl(),
      isComprado: new FormControl(),

    });
  }

  CadastrarProduto(): void {
    this.forms.value.produtoid = Guid.create().toString();
    this.forms.value.isComprado = false;
    const produto: Produto = this.forms.value;
    this.produtos.push(produto);
    localStorage.setItem("BD", JSON.stringify(this.produtos));
    this.forms.reset();
  }

  ExibirProdutos(): void {
    if (localStorage.getItem("BD")){
      this.produtos = JSON.parse(localStorage.getItem("BD"));
    }
    else{
      this.produtos = [];
    }
  }
}
