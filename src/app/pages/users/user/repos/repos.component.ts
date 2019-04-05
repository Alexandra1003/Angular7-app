import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReposService } from './repos.service';
import { IRepos } from '../../../../shared/interfaces/repos';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})
export class ReposComponent implements OnInit {
  repos: IRepos[];
  constructor(private route: ActivatedRoute, private reposService: ReposService) { }

  ngOnInit() {
    // console.log(222, this.route.snapshot.data.user);
    // this.route.snapshot.data.user.subscribe(repos => {
    //   console.log(123, repos);
    // });
    this.reposService.getAllRepos(this.route.snapshot.data.user.repos_url).subscribe(repos => {
      this.repos = repos;
      console.log('ach repos', this.repos);
    });
  }
}
