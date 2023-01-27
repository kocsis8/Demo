import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { User } from '../../shared/models/User';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup | any;
  firebaseErrorMessage: string;

  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private userService: UserService) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      'firstname': new FormControl('', Validators.required),
      'lastname': new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'password': new FormControl('', Validators.required)
    });
  }

  signup() {
    this.authService.signupUser(this.signupForm.get('email')?.value, this.signupForm.get('password')?.value).then((cred) => {
      console.log(cred);
      const user: User ={
        id: cred.user.uid as string,
        email: this.signupForm.get('email')?.value,
        name:{
          firstname: this.signupForm.get('firstname')?.value,
          lastname: this.signupForm.get('lastname')?.value
        }
      }
      this.userService.create(user).then(_ => {
        console.log('hozzáadás sikeres');
      }).catch(error => {
        console.log(error);
      })
    }).catch(error =>{
      console.log(error);
    });

  }
}


