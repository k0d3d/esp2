import { Component } from '@angular/core';

import {MdDialog, MdDialogRef} from '@angular/material';


@Component({
  selector: 'dialog-result-example-dialog',
  template: `
    <h1 md-dialog-title>{{dialogRef.data.title}}</h1>
    <div md-dialog-content>{{dialogRef.data.message}}</div>
    <div md-dialog-actions>
      <button md-button (click)="dialogRef.close()">Close</button>
    </div>  
  `,
})
export class AuthStatusDialog {
  constructor(public dialogRef: MdDialogRef<AuthStatusDialog>) {}
}