import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
  standalone: false
})
export class MenuPage implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  pageLogin(){
    this.router.navigate(['/login'])
  }

  pagePagar(){
    this.router.navigate(['/pagar'])
  }

  pageCadastro(){
    this.router.navigate(['/cadastro'])
  }

  pageReceber(){
    this.router.navigate(['/receber'])
  }
}
