import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: MyBlogComponent,
      },
      {
        path: ':slug/details',
        component: BlogDetailsComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
