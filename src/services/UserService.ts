import { IUserService } from 'src/types/User';
import { axiosInstances } from './AxiosService';

// Service layer
const fetchAllUsers = () =>
  axiosInstances
    .public()
    .get('/users')
    .then((response) => response.data.users);

const deleteUser = (userId: number) =>
  axiosInstances
    .public()
    .delete(`/users/${userId}`)
    .then((response) => response.data.users);

const updateUser = (user: any) =>
  axiosInstances
    .public()
    .put(`/users/${user.id}`, { user })
    .then((response) => response.data.user);

export const userService: IUserService = Object.freeze({
  fetchAllUsers,
  deleteUser,
  updateUser
});
