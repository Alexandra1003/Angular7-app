import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../shared/interfaces/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: IUser;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.user = this.route.snapshot.data.user;
    console.log('user!!!', this.user)
    // localStorage.setItem('bannedUsersList', JSON.stringify([]));
  }

  showRepos(userData: string) {
    console.log(111, this.user);
    this.router.navigate([`/user/${this.user.login}/repos`, { userData }]);
  }

  handleBanClick() {
    // debugger
    // const bannedUsersList = JSON.parse(localStorage.getItem('bannedUsersList'));
    // console.log(bannedUsersList);
    // bannedUsersList.push(this.user.login);
    // console.log(bannedUsersList);
    // localStorage.setItem('bannedUsersList', JSON.stringify(bannedUsersList));
    localStorage.setItem('bannedUsersList', JSON.stringify(this.user.login));

    // var storedNames = JSON.parse(localStorage.getItem("names"));
  }

}
