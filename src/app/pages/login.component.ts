import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service'


@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private userform: any
  constructor(
    public authService: AuthService) {}

  login(form) {
    this.authService.signInWithEmail(form)
    .then(h => {
      console.log(h)
    }, err => {
      console.log(err)
    })
  }  
  

}
