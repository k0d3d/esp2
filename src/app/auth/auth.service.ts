import { Injectable } from '@angular/core';
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods } from 'angularfire2';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class AuthService {
  private authState: FirebaseAuthState;

  constructor(
    public auth$: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute) {

    auth$.subscribe((state: FirebaseAuthState) => {
      if (!state) {
        if (location.hash.indexOf('/pages/login') === -1) {
          this.router.navigate(['/pages/login'])
        }
      } else {
        this.authState = state;
      }
    });
  }

  /**
   * quick check if an authenticated session is present 
   */
  get isAuthd(): boolean {
    return this.authState !== null;
  }
  /**
   * returns the authenticated user basic information
   */
  getAuthToken(): Promise<any> {
    const self = this
    return new Promise ((resolve, reject) => {
      
      if (!self.authState) return reject()
      self.authState.auth.getToken()
      .then(res => {
        resolve(res)
      }, err => reject(err))
      .catch(r => {
        console.log(r)
      })
    })
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      provider: AuthProviders.Github,
      method: AuthMethods.Popup     
    })
  }
  
  signInWithEmail(emailPassword): firebase.Promise<FirebaseAuthState> {
      return this.auth$.login(emailPassword,
        {
          provider: AuthProviders.Password,
          method: AuthMethods.Password,
        });      
      
  }

  signOut(): void {
    this.auth$.logout();
  }
}