export interface IUser {
  firstName: string;
  lastName: string;
  id: number;
  email: string;
  role: string;
}

export interface IUserService {
  fetchAllUsers: () => Promise<IUser[]>;
  updateUser: (user: any) => Promise<IUser>;
  deleteUser: (userId: number) => Promise<IUser>;
}
