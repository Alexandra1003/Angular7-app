import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserComponent } from './user/user.component';
import { UsersService } from './users.service';
import { UserResolveService } from './user/user-resolve.service';
import {MatSortModule, MatCardModule, MatTableModule} from '@angular/material';
import { RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [UsersComponent, UserComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatCardModule,
    RouterModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  exports: [UsersComponent, UserComponent],
  providers: [UsersService, UserResolveService]
})
export class UsersModule { }
