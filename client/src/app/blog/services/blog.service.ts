import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) { 

  }

  getLatestBlogsWithPagination() {

  }

  getBlogDetailsWithComments() {

  }

  getThreeMostViewedBlog() {

  }

  getFiveRandomBlogs() {

  }

}
