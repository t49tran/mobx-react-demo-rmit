import { createContext, useContext } from 'react';
import { userService } from 'src/services/UserService';
import { UserStore } from './UserStore';

export const createStore = () => ({
  userStore: new UserStore(userService)
});

export const StoreContext = createContext(createStore());
// Context api
export const useStores = () => useContext(StoreContext);
