import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/users/user/user.component';
import { ReposComponent } from './pages/users/user/repos/repos.component';
import { UserResolveService } from './pages/users/user/user-resolve.service';
import { BannedUsers } from './core/guards/bannedUsers.guard';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    canActivateChild: [BannedUsers],
    children: [
      {
        path: ':repos',
        component: ReposComponent
      }
    ],
    resolve: {
      user: UserResolveService
    }
  },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
