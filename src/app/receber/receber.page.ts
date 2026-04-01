import { Component, OnInit } from '@angular/core';

interface Cadastro {
  nome: string;
  vencimento: string;
  pagamento: string;
  valor: number;
}

@Component({
  selector: 'app-receber',
  templateUrl: './receber.page.html',
  styleUrls: ['./receber.page.scss'],
  standalone: false
})
export class ReceberPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaCadastros: Cadastro[] = [];

  nome: string = '';
  vencimento: string = '';
  pagamento: string = '';
  valor: number = 0;

  cadastrar() {
    const novoCadastro: Cadastro = {
      nome: this.nome,
      vencimento: this.vencimento,
      pagamento: this.pagamento,
      valor: this.valor
    };

    this.listaCadastros.unshift(novoCadastro);
    this.limparFormulario();
  }

  excluir(index: number) {
  this.listaCadastros.splice(index, 1);
  }

  limparFormulario() {
    this.nome = '';
    this.vencimento = '';
    this.pagamento = '';
    this.valor = 0 ;
  }



}
