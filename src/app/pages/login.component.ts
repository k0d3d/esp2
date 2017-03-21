import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service'
import { AuthStatusDialog } from '../shared/dialog'
import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private userform: any
  public form: any
  constructor(
    public authService: AuthService,
    public dialog: MdDialog) {
      this.form = {
        email: "",
        password: ""
      }
    }

  login(form) {
    this.authService.signInWithEmail(form)
    .then(h => {
      console.log(h)
    }, err => {
      // this.openDialog(err)
      alert(err.message)
    })
  }  

  openDialog(msg) {
    let dialogRef = this.dialog.open(AuthStatusDialog, {
      data: {
        title: 'Authentication attempt',
        message: msg
      }
    });
  }  
  

}

