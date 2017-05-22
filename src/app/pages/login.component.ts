import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service'
import { AuthStatusDialog } from '../shared/dialog'
import {MdDialog, MdDialogRef} from '@angular/material';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'login.component.html'
})
export class LoginComponent {
  private userform: any
  public form: any
  constructor(
    public authService: AuthService,
    private router: Router,
    public dialog: MdDialog) {
      this.form = {
        email: "",
        password: ""
      }
    }

  login(form) {
    this.authService.signInWithEmail(form)
    .then(h => {
      this.router.navigate(['/apps/activity'])
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

