import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from '../core/page-not-found/page-not-found.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  declarations: [
    LoginFormComponent,
    AdminHomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    PostsListComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    AgGridModule
  ]
})
export class AdminModule { }
