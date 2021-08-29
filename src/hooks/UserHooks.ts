import { useEffect, useState } from 'react';
import { useStores } from 'src/stores';

// Use hook to get data out of the store
export const useUsers = ({
  fetchImmediately
}: {
  fetchImmediately: boolean;
}) => {
  const { userStore } = useStores();
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    if (!fetchImmediately || hasFetched) {
      return;
    }

    const handleFetch = async () => {
      await userStore.getAllUsers();
      setHasFetched(true);
    };

    handleFetch();
  }, [fetchImmediately, hasFetched, userStore]);

  const { userList } = userStore;

  return { users: userList, fetch: userStore.getAllUsers };
};
