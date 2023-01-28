import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  
  userLoggedIn: boolean;  
  userId: string;
  constructor(private router: Router, private afAuth: AngularFireAuth) {
      this.userLoggedIn = false;
      this.userId ="";
      this.afAuth.onAuthStateChanged((user) => {              
          if (user) {
              this.userLoggedIn = true;
              this.userId = user.uid;
          } else {
              this.userLoggedIn = false;
              this.userId ="";
          }
      });
  }

  loginUser(email: string, password: string): Promise<any> {
      return this.afAuth.signInWithEmailAndPassword(email, password)
          .then(() => {
              console.log('Auth Service: loginUser: success');
              // this.router.navigate(['/dashboard']);
          })
          .catch((error) => {
              console.log('Auth Service: login error...');
              console.log('error code', error.code);
              console.log('error', error);
              if (error.code)
                  return { isValid: false, message: error.message };

                  return { isValid: false, message: error.message };
          });
  }

  signupUser(email: string, password: string): Promise<any> {
      return this.afAuth.createUserWithEmailAndPassword(email, password);         
  }

}
