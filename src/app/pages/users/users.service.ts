import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../../shared/config';
import { Observable } from 'rxjs';
import { IUser } from '../../shared/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<IUser[]> {
    return this.http.get<IUser[]>(`${API_URL}/users`);
  }
  getUserById(id: string): Observable<IUser> {
    return this.http.get<IUser>(`${API_URL}/users/${id}`);
  }
}
