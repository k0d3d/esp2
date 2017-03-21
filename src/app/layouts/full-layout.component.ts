import { Component, OnInit } from '@angular/core';

import { AuthService } from '../auth/auth.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './full-layout.component.html'
})
export class FullLayoutComponent implements OnInit {

  public disabled: boolean = false;
  public status: {isopen: boolean} = {isopen: false};

  public toggled(open: boolean): void {
    console.log('Dropdown is now: ', open);
  }

  public toggleDropdown($event: MouseEvent): void {
    $event.preventDefault();
    $event.stopPropagation();
    this.status.isopen = !this.status.isopen;
  }
  
  constructor (public authS: AuthService) {
    
  }
  
  signOut (): void {
    return this.authS.signOut()
  }

  ngOnInit(): void {}
}
