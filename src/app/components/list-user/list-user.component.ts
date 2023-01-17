import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.less'],
})
export class ListUserComponent implements OnInit {
  constructor(private apiSerive: HttpService) {}
  isLoading = false;
  userlist: any;
  ngOnInit() {
    this.isLoading = true;
    this.apiSerive.getUserList().subscribe((res: any) => {
      console.log(res);
      this.isLoading = false;
      this.userlist = res['Result'];
      console.log(this.userlist);
    });
  }
}
