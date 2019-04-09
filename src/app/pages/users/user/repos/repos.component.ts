import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposService } from './repos.service';
import { IRepos } from '../../../../shared/interfaces/repos';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos: MatTableDataSource<IRepos>;
  displayedColumns: string[] = ['id', 'full_name'];
  @ViewChild(MatSort) sort: MatSort;

  constructor(private route: ActivatedRoute, private reposService: ReposService) { }

  ngOnInit() {
    this.reposService.getAllRepos(this.route.snapshot.params.reposUrl).subscribe(repos => {
      this.repos = new MatTableDataSource(repos);
      this.repos.sort = this.sort;
    });
  }
}
