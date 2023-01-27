import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionNames = 'Users';

  constructor(private afs: AngularFirestore) { }

  create(user: User){
   return this.afs.collection<User>(this.collectionNames).add(user);
  }

  update(){}

  delete(){}
}
