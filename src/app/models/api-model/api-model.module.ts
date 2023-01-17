export interface createUser {
  userId: number;
  userName: string;
  password: string;
  OldPassword: string;
  firstName: string;
  lastName: string;
  emailId: string;
  currentKey: string;
  isActive: boolean;
  createdBy: number;
  createdDate: string;
  isPWDRestByAdmin: boolean;
  isPWDRestByUser: boolean;
  requestedByUserID: number;
}
