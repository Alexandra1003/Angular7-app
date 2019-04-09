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
  }

  showRepos(userData: {}) {
    this.router.navigate([`/user/${this.user.login}/repos`, userData ]);
  }

  handleBanClick() {
    localStorage.setItem(`${this.user.login}`, this.user.login );
    this.router.navigate([`/user/${this.user.login}`]);
  }
}
