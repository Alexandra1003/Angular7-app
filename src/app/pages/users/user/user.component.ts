import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from '../../../shared/interfaces/user';
import { select, Store } from '@ngrx/store';
import { selectSelectedUser } from 'src/app/store/selectors/user.selectors';
import { IAppState } from 'src/app/store/state/app.state';
import { GetUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  user: IUser;
  user$ = this._store.pipe(select(selectSelectedUser));
  constructor(private _store: Store<IAppState>, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this._store.dispatch(new GetUser(this.route.snapshot.data.user));
    this.user$.subscribe(data => {
      this.user = data;
      console.log('---- data', data);
    });
  }

  showRepos(userData: {}) {
    this.router.navigate([`/user/${this.user.login}/repos`, userData]);
  }

  handleBanClick() {
    localStorage.setItem(`${this.user.login}`, this.user.login);
    this.router.navigate([`/user/${this.user.login}`]);
  }
}
