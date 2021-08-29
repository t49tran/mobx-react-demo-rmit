import * as React from 'react';
import { DefaultDialog } from 'src/components/DefaultDialog';
import { useStores } from 'src/stores';
import { Button } from '@material-ui/core';
import { UserForm } from 'src/components/forms/UserForm';
import { IUser } from 'src/types/User';

type UserDialogProps = {
  isOpened: boolean;
  onClose: () => void;
  user?: IUser;
};

export const UserDialog: React.FC<UserDialogProps> = ({
  isOpened,
  onClose,
  user
}) => {
  const {
    userStore: { updateUser }
  } = useStores();
  const { id: userId } = user || {};

  const formRef = React.useRef<any>();

  const handleUpdateUser = React.useCallback(
    async (userData: any) => {
      try {
        await updateUser({ id: userId, ...userData });
      } catch (error) {
        console.error(error);
      } finally {
        onClose();
      }
    },
    [updateUser, onClose, userId]
  );

  const handleRequestSubmit = React.useCallback(() => {
    if (!formRef.current || !formRef.current.submitForm) {
      return;
    }

    formRef.current.submitForm();
  }, []);

  return (
    <DefaultDialog title="Edit User" open={isOpened} onClose={onClose}>
      <UserForm user={user} onSubmit={handleUpdateUser} formRef={formRef} />
      <Button onClick={handleRequestSubmit} size="small" color="secondary">
        SUBMIT
      </Button>
    </DefaultDialog>
  );
};
