import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { FeesComponent } from './components/fees/fees.component';
import { KimsDashboardComponent } from './components/kims-dashboard/kims-dashboard.component';
import { LayoutTwoComponent } from './components/layout-two/layout-two.component';
import { LayoutComponent } from './components/layout/layout.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PgFormComponent } from './components/pg-form/pg-form.component';
import { PgListComponent } from './components/pg-list/pg-list.component';
import { SeatMatrixComponent } from './components/seat-matrix/seat-matrix.component';
import { UgFormComponent } from './components/ug-form/ug-form.component';
import { UgListComponent } from './components/ug-list/ug-list.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'kims',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'kimsDashboard',
        pathMatch: 'full',
      },
      {
        path: 'kimsDashboard',
        component: KimsDashboardComponent,
      },
      {
        path: 'createUser',
        component: CreateUserComponent,
      },
      {
        path: 'userList',
        component: ListUserComponent,
      },
      {
        path: 'editUser',
        component: EditUserComponent,
      },
    ],
  },
  {
    path: 'kimsDatabase',
    component: LayoutTwoComponent,
    children: [
      {
        path: '',
        redirectTo: 'ugApplicationForm',
        pathMatch: 'full',
      },
      {
        path: 'ugApplicationForm',
        component: UgFormComponent,
      },
      {
        path: 'pgApplicationForm',
        component: PgFormComponent,
      },
      {
        path: 'seatMatrix',
        component: SeatMatrixComponent,
      },
      {
        path: 'fees',
        component: FeesComponent,
      },
      {
        path: 'ugList',
        component: UgListComponent,
      },
      {
        path: 'pgList',
        component: PgListComponent,
      },
    ],
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
