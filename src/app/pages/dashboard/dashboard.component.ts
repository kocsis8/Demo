import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Measurement } from '../../shared/models/Measurement';
import { ElectrikClock } from '../../shared/models/ElectricClock';
import { AuthService } from '../../shared/services/auth.service';
import { ClockService } from '../../shared/services/clock.service';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges  {
    clocks: Array<ElectrikClock> = [];
    addmeasurementformg: FormGroup | any;
    maxDate = new Date();

  constructor(private authService: AuthService, private clockService: ClockService, private userService: UserService) {}

  ngOnChanges(changes: SimpleChanges) {
    
  }

  ngOnInit(): void {
    console.log("lalla");

    this.clockService.gatallbyuser(this.authService.userId).subscribe(clocks => {
      this.clocks = clocks;
    });


    this.addmeasurementformg = new FormGroup({
      'clockserial': new FormControl('', Validators.required),
      'value': new FormControl('', Validators.required),
      'selecteddate': new FormControl(new Date(), [Validators.required])
    });
  }


  addmeasurement(){
    const measurement: Measurement = {
      id: this.authService.userId as string,
      uid: this.authService.userId as string,
      cid: this.addmeasurementformg.get('clockserial')?.value,
      value: this.addmeasurementformg.get('value')?.value,
      date: this.addmeasurementformg.get('selecteddate')?.value
    }
  }
    
    

}
