import {
  action,
  computed,
  makeObservable,
  observable,
  ObservableMap,
  runInAction
} from 'mobx';
import { IUser, IUserService } from 'src/types/User';

/**
 * Nearly everything in JS except for primitive types such as number and boolean are object
 * - functions
 * - object
 * - array
 * - symbol
 * - Map<string | number, any> {[key]: value}
 * - Set is a unique map
 *
 * Read complexity: O(1) - O(n)
 * Write complexity: O(n) - O(1)
 */

/**
 * makeObservable / makeAutoObservable
 *
 * state -> observable
 * derived data -> computed
 * how to change a state -> action
 */

// Store layer

// [observable -> reaction -> observable -> computed / reaction]
// observable -> computed
// users -> Observable Map -> user : ObservableObject
// user -> [action] -> [user]
// user -> JS object
// reaction -> reaction
// mutation should happen in action

export class UserStore {
  users: ObservableMap<number, IUser> = new ObservableMap(undefined);
  userService: IUserService;

  /**
   * Dependency Injection
   *
   * @param userService
   */
  constructor(userService: IUserService) {
    // first param is the target
    // second param is annotations
    makeObservable(this, {
      users: observable.shallow,
      userList: computed, // computed is a kind of observer -> provide value
      noOfUsers: computed,
      getAllUsers: action, // action is where observable is changed
      deleteUser: action, // action is where observable is changed
      updateUser: action
    });

    this.userService = userService;
  }

  get userList() {
    return Array.from(this.users.values());
  }

  get noOfUsers() {
    return Array.from(this.users.values()).length;
  }

  /**
   * Action
   */
  getAllUsers = async () => {
    const users = await this.userService.fetchAllUsers();

    runInAction(() => {
      this.users.merge(users.map((user) => [user.id, user]));
    });
  };

  /**
   * Action
   *
   * @param id
   */
  deleteUser = async (id: number) => {
    await this.userService.deleteUser(id);

    runInAction(() => {
      this.users.delete(id);
    });
  };

  /**
   * Action
   *
   * @param userData
   */
  updateUser = async (userData: any) => {
    const user = await this.userService.updateUser(userData);

    runInAction(() => {
      this.users.set(user.id, user);
    });
  };
}
