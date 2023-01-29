import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';
import { ClockService } from '../../shared/services/clock.service';
import { ElectrikClock } from '../../shared/models/ElectricClock';
import { UserService } from '../../shared/services/user.service';



@Component({
  selector: 'app-addclock',
  templateUrl: './addclock.component.html',
  styleUrls: ['./addclock.component.scss']
})
export class AddclockComponent implements OnInit  {

  displayedColumns: string[] = ['serialnumber', 'name' , 'adress'];
  dataSource: ElectrikClock[] = [{    id: "", Uid: "", name: "", serialnumber: 0, adress: ""}];
  clockC = 1;
  addclockformg: FormGroup | any;
  
  
  ngOnInit(): void {

    this.clockService.getallbyuser(this.authService.userId).subscribe(clocks => {
      this.dataSource = clocks;
    });

    this.addclockformg = new FormGroup({
      'serialnumber': new FormControl('', Validators.required),
      'cname': new FormControl('', Validators.required),
      'adress': new FormControl('', Validators.required),
    });
  
  }




  constructor(private authService: AuthService, private router: Router, private afAuth: AngularFireAuth, private clockService: ClockService, private userService: UserService) {
    
  }

  addclock() {

    this.userService.userById(this.authService.userId).subscribe(user => {
      if (user != undefined) {
        this.clockC = 1 + user.clocks;
      }
    });


    this.userService.updateclockcount(this.authService.userId, this.clockC);

    const clock: ElectrikClock = {
      id: this.authService.userId + this.clockC,
      Uid: this.authService.userId as string,
      name: this.addclockformg.get('cname')?.value,
      serialnumber: this.addclockformg.get('serialnumber')?.value,
      adress: this.addclockformg.get('adress')?.value
    }



    this.clockService.create(clock).then(_ => {
      console.log('hozzáadás sikeres');
    }).catch(error => {
      console.log(error);
    })




  }




}
