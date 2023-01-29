import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Measurement } from '../models/Measurement';

@Injectable({
  providedIn: 'root'
})
export class MeasurementService {


  collectionNames ='Measurement'
  constructor(private afs: AngularFirestore) { }



  create(measurement: Measurement, doc: string){
     return this.afs.collection<Measurement>(this.collectionNames).doc(doc).set(measurement);
     
  }

  gatallbyuser(userid: string){
    return this.afs.collection<Measurement>(this.collectionNames, ref => ref.where("uid","==" , userid)).valueChanges();
  }

  deleteByid(mid: string){
    return this.afs.collection<Measurement>(this.collectionNames).doc(mid).delete();
  }
}
