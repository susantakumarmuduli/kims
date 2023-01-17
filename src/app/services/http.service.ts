import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { createUser } from '../models/api-model/api-model.module';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient, private router: Router) {}

  baseApiURL = 'https://localhost:7170';
  //baseApiURL = 'https://apikims.azurewebsites.net';

  login(userName: string, password: string) {
    return this.http.get(
      `${this.baseApiURL}/api/User/Login?UserName=${userName}&Password=${password}`,
      {}
    );
  }
  getUserList() {
    return this.http.get(`${this.baseApiURL}/api/User/UserList`, {});
  }
  createUser(createUser: createUser) {
    return this.http.post<createUser>(
      `${this.baseApiURL}/api/User/SaveUser`,
      createUser
    );
  }
  getUGData() {
    return this.http.get(`${this.baseApiURL}/api/Common/GetMasterData`, {});
  }
}
