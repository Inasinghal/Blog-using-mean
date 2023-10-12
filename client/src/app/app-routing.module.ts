import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './admin/auth/authentication.guard';
import { LoginFormComponent } from './admin/auth/login-form/login-form.component';
import { BlogHomeComponent } from './blog/blog-home/blog-home.component';
import { HomeComponent } from './blog/home/home.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginFormComponent },
  {
    path: 'home', component: HomeComponent, children: [{
      path: '',
      component: BlogHomeComponent,
    }]
  },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule), canActivate: [AuthenticationGuard] },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
