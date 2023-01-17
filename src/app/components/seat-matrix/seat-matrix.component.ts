import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-seat-matrix',
  templateUrl: './seat-matrix.component.html',
  styleUrls: ['./seat-matrix.component.less'],
})
export class SeatMatrixComponent implements OnInit {
  constructor(private loginService: LoginService) {}

  ngOnInit() {
    this.loginService.getSeatMatrix().subscribe((res) => {
      console.log(res);
    });
  }
}
