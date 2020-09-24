import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AboutComponent} from './about/about.component';
import { RouterModule, Routes} from '@angular/router';
import {SigninComponent} from './signin/signin.component';
import {SignupComponent} from './signup/signup.component';
import {LayoutComponent} from './layout/layout.component';
import {ContactListComponent} from './contact-list/contact-list.component';
import {ContactNewComponent} from './contact-new/contact-new.component';
import {ContactEditComponent} from './contact-edit/contact-edit.component';
import {TagListComponent} from './tag-list/tag-list.component';
import {TagEditComponent} from './tag-edit/tag-edit.component';
import {TagNewComponent} from './tag-new/tag-new.component';
import {AuthGuards} from './auth-guards.service';

// 1 init routing module
// 2 config routing table
// 3 config routing links

const routes: Routes = [{
  path: 'signin',
  component: SigninComponent
},
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'layout',
    component: LayoutComponent
  },
  {
    path: 'contacts',
    component: LayoutComponent,
    canActivate: [AuthGuards],
    children: [
      {
        path: '',
        component: ContactListComponent
      },
      {
        path: 'new',
        component: ContactNewComponent
      },
      {
        path: 'edit/:id',             // url params
        component: ContactEditComponent
      }
    ]
  },
  {
    path: 'tags',
    component: LayoutComponent,
    canActivate: [AuthGuards],
    children: [
      {
        path: '',
        component: TagListComponent
      },
      {
        path: 'new',
        component: TagNewComponent
      },
      {
        path: 'edit/:id',
        component: TagEditComponent
      }
    ]
  },
  {
    path: 'about',
    component: LayoutComponent,
    canActivate: [AuthGuards],
    children: [
      {
        path: '',
        component: AboutComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'contacts',
    pathMatch: 'full'
  }
  ];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [AuthGuards]
})


export class AppRoutingModule { }
