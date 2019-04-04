import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: IUser;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.user;
    console.log(this.user);
  }

  handleBanClick() {
    console.log(111);
    const bannedUsersList = [];
    bannedUsersList.push(this.user);
    localStorage.setItem('bannedUsersList', JSON.stringify(bannedUsersList));

    // var storedNames = JSON.parse(localStorage.getItem("names"));
  }

}
