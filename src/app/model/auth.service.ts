import {Injectable} from '@angular/core';
import { Auth } from './auth.model';

@Injectable()
class AuthService {
  Logins: Auth[] = [];

  constructor() {
    this.Logins.push({user : 'vim', pass : '123'});
    this.Logins.push({user : 'nick', pass : '123'});
    this.Logins.push({user : 'anne', pass : '123'});
  }

}

export { AuthService };
