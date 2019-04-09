import { Component, OnInit, ViewChild } from '@angular/core';
import { IUser } from '../../shared/interfaces/user';
import { UsersService } from './users.service';
import { Router } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  list: MatTableDataSource<IUser>;
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'go'];

  @ViewChild(MatSort) sort: MatSort;
  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.userService.getAllUsers().subscribe(data => {
      this.list = new MatTableDataSource(data);
      this.list.sort = this.sort;
    });
  }
}
