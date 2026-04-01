import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


interface Cadastro {
  nome: string;
  vencimento: string;
  pagamento: string;
  valor: number;
}

@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.page.html',
  styleUrls: ['./pagar.page.scss'],
  standalone: false
})
export class PagarPage implements OnInit {

  
  constructor(private router: Router) {}

  ngOnInit() {
  }
   
  pageLogin(){
    this.router.navigate(['/login'])
  }

   pageMenu(){
    this.router.navigate(['/menu']) 
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
