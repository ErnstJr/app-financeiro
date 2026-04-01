import { Component, OnInit } from '@angular/core';


interface Cadastro {
  nome: string;
  tipo: string; 
  endereco: string;
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
  standalone: false
})
export class CadastroPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaCadastros: Cadastro[] = [];

  nome: string = '';
  tipo: string = '';
  endereco: string = '';

  cadastrar() {
    this.listaCadastros.unshift({
      nome: this.nome,
      tipo: this.tipo,
      endereco: this.endereco
    });

    this.limparFormulario();
  }

  excluir(index: number) {
    this.listaCadastros.splice(index, 1);
  }

  limparFormulario() {
    this.nome = '';
    this.tipo = '';
    this.endereco = '';
  }

}
