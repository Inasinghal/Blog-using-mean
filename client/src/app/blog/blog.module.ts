import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { BlogHomeComponent } from './blog-home/blog-home.component';
import { HomeComponent } from './home/home.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    BlogDetailsComponent,
    BlogHomeComponent,
    HomeComponent,
    MyBlogComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    HttpClientModule
  ]
})
export class BlogModule { }
