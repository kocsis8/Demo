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
   

  

  ngOnChanges(changes: SimpleChanges) {
    
  }

  ngOnInit(): void {

  }



    
    

}
