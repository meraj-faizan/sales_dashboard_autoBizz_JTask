export enum IRole {
  SUPER_ADMIN = "SUPER_ADMIN",
}


export interface IEmployee {
  id: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  phone: string;
  password: string;
  emailVerified: boolean;
  phoneVerified: boolean;
  profileImageUrl: string | null;
  isActive: boolean;
  role: IRole;
  branchId: string | null;
  createdByUserId: string | null;
  employeeProfile: IEmployee | null;
  createdAt: string;
  updatedAt: string;
}
