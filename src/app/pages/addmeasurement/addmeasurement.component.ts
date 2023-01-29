import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Measurement } from '../../shared/models/Measurement';
import { AuthService } from '../../shared/services/auth.service';
import { ClockService } from '../../shared/services/clock.service';
import { UserService } from '../../shared/services/user.service';
import { ElectrikClock } from '../../shared/models/ElectricClock';
import { MeasurementService } from '../../shared/services/measurement.service';

@Component({
  selector: 'app-addmeasurement',
  templateUrl: './addmeasurement.component.html',
  styleUrls: ['./addmeasurement.component.scss']
})
export class AddmeasurementComponent implements OnInit {
  displayedColumns: string[] = ['date', 'cid' , 'value', 'id'];
  dataSource: Measurement[] = [{  id: "", uid: "", cid: "", value: 0, date: ""}];
  clocks: Array<ElectrikClock> = [];
  addmeasurementformg: FormGroup | any;
  maxDate = new Date();
  measurements = 1;

  constructor(private authService: AuthService, private clockService: ClockService, private userService: UserService, private measurementService: MeasurementService) {}


  ngOnInit(): void {

    this.measurementService.gatallbyuser(this.authService.userId).subscribe(measurements =>{
      this.dataSource = measurements;
    })

   

    this.clockService.getallbyuser(this.authService.userId).subscribe(clocks => {
      this.clocks = clocks;
    });


    this.addmeasurementformg = new FormGroup({
      'clockserial': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.required),
      'selecteddate': new FormControl('', [Validators.required])
    });

  }


  addmeasurement(){
    this.userService.userById(this.authService.userId).subscribe(user => {
      if (user != undefined) {
        this.measurements = 1 + user.measurements;
      }
    });


    this.userService.updatemeasurementcount(this.authService.userId, this.measurements);

    var date = this.addmeasurementformg.get('selecteddate')?.value as string;
    var datePart = date.toString().split(' ');
    const measurement: Measurement = {
      id: this.authService.userId + this.measurements,
      uid: this.authService.userId as string,
      cid: this.addmeasurementformg.get('clockserial')?.value,
      value: this.addmeasurementformg.get('value')?.value,
      date: datePart[3]+' '+datePart[1]+' '+datePart[2]
    }


    this.measurementService.create(measurement, (this.authService.userId + this.measurements)).then(_ => {
      console.log('hozzáadás sikeres');
    }).catch(error => {
      console.log(error);
    })

  }

  datelemeasurement(mid: string){
    this.measurementService.deleteByid(mid).then(_ =>{
      console.log('sikeres törlés');
    }).catch(error => {
      console.log(error);
    })
  }
}
