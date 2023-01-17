import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private router: Router) {}

  getUserList() {
    return this.http.get('/api/User/UserList', {});
  }
  getUGMasterdata() {
    return this.http.get('https://localhost:7170/api/Common/GetMasterData', {});
  }
  getSeatMatrix() {
    return this.http
      .post(
        'https://localhost:7170/api/UGApplication/GetUGSeatMatrix?AcademicYearId=42',
        {},
        {
          observe: 'body',
          responseType: 'json',
        }
      )
      .pipe(
        map((res) => {
          return JSON.parse(res as string);
        })
      );
  }
}
