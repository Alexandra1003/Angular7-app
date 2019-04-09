import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepos } from '../../../../shared/interfaces/repos';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  constructor(private http: HttpClient) { }

  getAllRepos(reposUrl: Observable<Params>): Observable<IRepos[]> {
    return this.http.get<IRepos[]>(`${reposUrl}`);
  }
}
