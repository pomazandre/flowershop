
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})

export class AuthComponent implements OnInit {
  public User: string;
  public Pass: string;
  @Output() Auth = new EventEmitter();
  public Display: boolean;

  constructor() {
  }

  ngOnInit(): void {
  }

  checkLogin() {
    this.Display = false;
    this.Auth.emit();
  }

}
