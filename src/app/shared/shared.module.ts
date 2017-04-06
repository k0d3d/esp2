import { NgModule }            from '@angular/core';
import { CommonModule }        from '@angular/common';
import { FormsModule }         from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { DropdownModule } from 'ng2-bootstrap/dropdown';

import { ShortIdPipe }         from './short-id.pipe';
import { MomentModule } from 'angular2-moment'

@NgModule({
  imports:      [ CommonModule ],
  declarations: [ ShortIdPipe ],
  exports:      [ 
      ShortIdPipe, 
      CommonModule, 
      FormsModule, 
      MomentModule,
      ChartsModule,
      DropdownModule
    ]
})
export class SharedModule { }
