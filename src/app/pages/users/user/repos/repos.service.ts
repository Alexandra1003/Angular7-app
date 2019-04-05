import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IRepos } from '../../../../shared/interfaces/repos';
import { Params } from '@angular/router';
// import { API_URL } from '../../shared/config';

@Injectable({
  providedIn: 'root'
})
export class ReposService {
  constructor(private http: HttpClient) { }

  getAllRepos(reposUrl: Observable<Params>): Observable<IRepos[]> {
    console.log('reposUrl', reposUrl);
    return this.http.get<IRepos[]>(`${reposUrl}`);
  }
}
