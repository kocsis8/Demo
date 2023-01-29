import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ElectrikClock } from '../models/ElectricClock';

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  collectionNames ='Clocks'
  constructor(private afs: AngularFirestore) { }

  create(clock: ElectrikClock){
     return this.afs.collection<ElectrikClock>(this.collectionNames).add(clock);
  }

  getallbyuser(userid: string){
    return this.afs.collection<ElectrikClock>(this.collectionNames, ref => ref.where("Uid","==" , userid)).valueChanges();
  }

  deleteById(clockId: string){
    //TODO
  }
}
