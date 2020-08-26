import { Component, OnInit , ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  private _mdlMenuItems: MenuItem[];
  
  public get mdlMenuItems(): MenuItem[] {
    return this._mdlMenuItems;
  }

  constructor(private router: Router ){
  }

  ngOnInit() {
    this._mdlMenuItems = [
      { label: 'Главная', routerLink: ['/'] },
      { label: 'Каталог', routerLink: ['/cat'] },
      { label: 'Условия доставки', routerLink: ['/delivery'] },
      { label: 'Условия оплаты', routerLink: ['/pay'] },
      { label: 'Контакты', routerLink: ['/contacts'] }
    ];
  }

  showBag() {
    this.router.navigateByUrl('/bag');
  }

  Login() {
  }

  onAuth() {

  }

}
