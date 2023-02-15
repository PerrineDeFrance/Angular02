import { Component, OnInit } from '@angular/core';
import { User } from '../model/user';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css'],
})
export class UserProfileComponent implements OnInit {
  user: User;

  constructor() {
    this.user = new User(
      'https://www.babelio.com/users/AVT2_Huon_6976.jpeg',
      'Perrine',
      '41',
      'Perrine Huon'
    );
  }

  ngOnInit(): void {}

  hiddenAge(): void {
    this.user.hiddenAge();
  }
}
