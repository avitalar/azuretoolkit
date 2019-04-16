import { Component, OnInit } from '@angular/core';
import { UserService } from '../common/services/user.service';
import { User } from '../common/models/user';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  user: User;
  ngOnInit(): void {
    this.userService.getUser().subscribe(user => this.user = user );
  }

  constructor(private userService: UserService) { }

}
