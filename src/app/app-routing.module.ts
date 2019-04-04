import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './pages/users/users.component';
import { UserComponent } from './pages/users/user/user.component';
import { UserResolveService } from './pages/users/user/user-resolve.service';

const routes: Routes = [
  { path: 'users', component: UsersComponent },
  // { path: 'users', component: UsersComponent },
  {
    path: 'users/:id',
    component: UserComponent,
    resolve: {
      user: UserResolveService
    }
  },
  { path: '**', redirectTo: '/users' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
