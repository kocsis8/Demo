import { Component, OnInit } from '@angular/core';
import { User } from '../../shared/models/User';
import { AuthService } from '../../shared/services/auth.service';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit{

  constructor(private authService: AuthService, private userService: UserService){}

  cuser: User ={ id: "", email: "", name:{ firstname: "", lastname: "" }, clocks: 0, measurements: 0};

  ngOnInit(): void {
    this.userService.userById(this.authService.userId).subscribe(user => {
      if (user != undefined)
      this.cuser= user;
    })
    
  }


  update(firstname: string, lastname: string){
    this.userService.updatename(this.cuser.id, firstname, lastname).then(_ => {
      console.log("siekers");
    }).catch(error => {
      console.log(error);
    })
  }

}
