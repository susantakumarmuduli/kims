import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import * as _ from 'lodash';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.less'],
})
export class EditUserComponent implements OnInit {
  constructor(
    private apiSerive: HttpService,
    private formBuilder: FormBuilder
  ) {}
  userlist: any;
  user: any;
  singleUserForm!: FormGroup;
  isEditMode = false;

  ngOnInit() {
    this.getUserList();
    this.getForm();
  }
  getUserList() {
    this.apiSerive.getUserList().subscribe((res: any) => {
      this.userlist = res['Result'];
      console.log(this.userlist);
    });
  }
  getUser(userId: number) {
    this.isEditMode = true;
    this.user = _.filter(this.userlist, { UserId: userId });
    this.setForm();
  }
  getForm() {
    this.singleUserForm = this.formBuilder.group({
      username: [{ value: '', disabled: true }, Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      oldPassword: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  get f() {
    return this.singleUserForm.controls;
  }
  setForm() {
    this.singleUserForm.patchValue({
      username: this.user[0]['UserName'],
      firstName: this.user[0]['FirstName'],
      lastName: this.user[0]['LastName'],
      email: this.user[0]['EmailId'],
    });
  }
  onSubmit() {}
}
