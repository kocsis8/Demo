import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, RouterLink } from '@angular/router';

import { AuthService } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent   {





  constructor(public afAuth: AngularFireAuth, private router: Router) { }



  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
    console.log("nyit");
  }

  close(sidenav: MatSidenav){
    sidenav.close();
  }

  logout(): void {
    this.afAuth.signOut();
    this.router.navigate(['/home']); 
}
}
