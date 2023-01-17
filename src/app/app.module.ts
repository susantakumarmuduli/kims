import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { LayoutComponent } from './components/layout/layout.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { EditUserComponent } from './components/edit-user/edit-user.component';
import { ListUserComponent } from './components/list-user/list-user.component';
import { KimsDashboardComponent } from './components/kims-dashboard/kims-dashboard.component';
import { LayoutTwoComponent } from './components/layout-two/layout-two.component';
import { UgFormComponent } from './components/ug-form/ug-form.component';
import { PgFormComponent } from './components/pg-form/pg-form.component';
import { SeatMatrixComponent } from './components/seat-matrix/seat-matrix.component';
import { FeesComponent } from './components/fees/fees.component';
import { UgListComponent } from './components/ug-list/ug-list.component';
import { PgListComponent } from './components/pg-list/pg-list.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    LayoutComponent,
    CreateUserComponent,
    EditUserComponent,
    ListUserComponent,
    KimsDashboardComponent,
    LayoutTwoComponent,
    UgFormComponent,
    PgFormComponent,
    SeatMatrixComponent,
    FeesComponent,
    UgListComponent,
    PgListComponent,
    LoaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
