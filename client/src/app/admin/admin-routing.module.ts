import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { PostsListComponent } from './posts-list/posts-list.component';

const routes: Routes = [
  {
    path: '',
    component: AdminHomeComponent,
    children: [
      {
        path: '',
        component: PostsListComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
