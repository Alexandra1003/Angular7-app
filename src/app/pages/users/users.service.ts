import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService implements OnInit {
  private UserList;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // this.http.get(URL: `${API_URL}/users`);
  }
}
