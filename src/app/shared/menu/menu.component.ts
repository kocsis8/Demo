import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {



  constructor(public afAuth: AngularFireAuth) { }

  logout(): void {
    this.afAuth.signOut();
}
}
