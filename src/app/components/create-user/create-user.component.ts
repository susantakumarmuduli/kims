import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { createUser } from 'src/app/models/api-model/api-model.module';
import { HttpService } from 'src/app/services/http.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less'],
})
export class CreateUserComponent implements OnInit {
  constructor(
    private apiSerive: HttpService,
    private formBuilder: FormBuilder
  ) {}
  isLoading = false;
  userlist: any;
  UserForm!: FormGroup;
  ngOnInit() {
    this.getUserList();
    this.createUserForm();
  }
  getUserList() {
    this.apiSerive.getUserList().subscribe((res: any) => {
      console.log(res);
      this.userlist = res['Result'];
      console.log(this.userlist);
    });
  }
  createUserForm() {
    this.UserForm = this.formBuilder.group({
      username: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      email: ['', Validators.required],
    });
  }
  get f() {
    return this.UserForm.controls;
  }
  onSubmit() {
    this.f;
    const user: createUser = {
      userId: 0,
      userName: this.f['username'].value,
      password: this.f['password'].value,
      OldPassword: this.f['password'].value,
      firstName: this.f['firstName'].value,
      lastName: this.f['lastName'].value,
      emailId: this.f['email'].value,
      currentKey: '',
      isActive: true,
      createdBy: 1,
      createdDate: '2023-01-14T16:54:05.761Z',
      isPWDRestByAdmin: false,
      isPWDRestByUser: false,
      requestedByUserID: 1,
    };
    this.isLoading = true;
    this.apiSerive.createUser(user).subscribe({
      next: (res: any) => {
        this.isLoading = false;
        console.log(res);
      },
      error: (err) => {
        this.isLoading = false;
        console.log(err);
      },
    });
  }
}
