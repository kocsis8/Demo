import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';
import { User } from '../../shared/models/User';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, OnChanges  {
   
  cuser: User ={ id: "", email: "", name:{ firstname: "", lastname: "" }, clocks: 0, measurements: 0};

  constructor(private authService: AuthService, private userService: UserService){}

  ngOnChanges(changes: SimpleChanges) {
    
  }

  ngOnInit(): void {
        this.userService.userById(this.authService.userId).subscribe(user => {
      if (user != undefined)
      this.cuser= user;
    })
  }



    
    

}
