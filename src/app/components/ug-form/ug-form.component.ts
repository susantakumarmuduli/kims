import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-ug-form',
  templateUrl: './ug-form.component.html',
  styleUrls: ['./ug-form.component.less'],
})
export class UgFormComponent implements OnInit {
  constructor(private apiService: HttpService) {}
  isLoading = false;
  AllData: any;
  academicYear: any;
  quotas: any;

  ngOnInit() {
    this.getMasterData();
  }
  getMasterData() {
    this.isLoading = true;
    this.apiService.getUGData().subscribe((res: any) => {
      this.isLoading = false;
      console.log(res);
      this.AllData = res['Result'];
      this.callAllMethod();
    });
  }
  callAllMethod() {
    this.getAcademicYear();
    this.getQuota();
  }
  getAcademicYear() {
    this.academicYear = _.filter(this.AllData, { KeyTypeID: 5 });
  }
  getQuota() {
    this.quotas = _.filter(this.AllData, { KeyTypeID: 8 });
  }
}
