import { observer } from 'mobx-react-lite';
import React, { useCallback, useState } from 'react';
import { UserDialog } from 'src/components/UserDialog';
import { UserTable } from 'src/components/UserTable';
import { useUsers } from 'src/hooks/UserHooks';
import { useStores } from 'src/stores';
import { IUser } from 'src/types/User';

// Container
export const UsersContainer = observer(() => {
  const { users } = useUsers({ fetchImmediately: true });
  const { userStore } = useStores();
  const [userToEdit, setUserToEdit] = useState<IUser | undefined>(undefined);
  const { noOfUsers } = userStore;

  const handleRemoveUser = useCallback(
    (user: IUser) => {
      userStore.deleteUser(user.id);
    },
    [userStore]
  );

  const handleEditUser = useCallback((user: IUser) => {
    setUserToEdit(user);
  }, []);

  const handleClose = useCallback(() => {
    setUserToEdit(undefined);
  }, []);

  return (
    <>
      <h3>No of users: {noOfUsers}</h3>
      <UserTable
        users={users}
        onRemoveUser={handleRemoveUser}
        onEditUser={handleEditUser}
      />
      <UserDialog
        user={userToEdit}
        onClose={handleClose}
        isOpened={!!userToEdit}
      />
    </>
  );
});
