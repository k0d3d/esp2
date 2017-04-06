import { Injectable } from '@angular/core';
import { Auth, User } from '@ionic/cloud-angular';

import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {

  constructor(
    public auth$: Auth, 
    public user: User,
    private router: Router,
    private route: ActivatedRoute) {


  }

  /**
   * quick check if an authenticated session is present 
   */
  get isAuthd(): boolean {
    return this.auth$.isAuthenticated();
  }
  /**
   * returns the authenticated user basic information
   */
  getAuthToken(): String {
    const self = this
    return this.auth$.getToken()
  }
  
  signInWithEmail(emailPassword) {
    
      return this.auth$.login('basic', emailPassword);      
      
  }

  signOut(): void {
    this.auth$.logout();
  }
}