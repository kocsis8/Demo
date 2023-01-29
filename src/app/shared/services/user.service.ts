import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  collectionNames = 'Users';
  user : User | any;

  constructor(private afs: AngularFirestore) { }

  create(user: User){
   return this.afs.collection<User>(this.collectionNames).doc(user.id).set(user);
  }

  updateclockcount(userid: string, clocks: number){
    return this.afs.collection<User>(this.collectionNames).doc(userid).update({clocks: clocks});
  }

  updatemeasurementcount(userid: string, measurements: number){
    return this.afs.collection<User>(this.collectionNames).doc(userid).update({measurements: measurements});
  }

  delete(){}

  userById(userid: string){
    return this.afs.collection<User>(this.collectionNames).doc(userid).valueChanges();
  }
}
