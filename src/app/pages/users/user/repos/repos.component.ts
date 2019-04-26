import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposService } from './repos.service';
import { IRepos } from '../../../../shared/interfaces/repos';
import { MatSort, MatTableDataSource } from '@angular/material';
import { selectReposList } from 'src/app/store/selectors/repos.selectors';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos$ = this._store.pipe(select(selectReposList));
  repos: MatTableDataSource<IRepos>;
  displayedColumns: string[] = ['id', 'full_name'];

  @ViewChild(MatSort) sort: MatSort;

  constructor(private _store: Store<IAppState>, private route: ActivatedRoute, private reposService: ReposService) { }

  ngOnInit() {

    this.repos$
      .pipe(filter(repos => !!repos))
      .subscribe(
        repos => {
          this.repos = new MatTableDataSource(repos);
          this.repos.sort = this.sort;
          console.log('---- repos', repos);
        },
        error => {
          console.log("EE:", error);
        })
  }
}
