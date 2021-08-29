import { TableCell, TableRow } from '@material-ui/core';
import React, { useCallback, useState } from 'react';
import { IUser } from 'src/types/User';
import { UserTableRowMenu } from './UserTableRowMenu';
import MoreVertIcon from '@material-ui/icons/MoreVert';

type UserTableRowProps = {
  user: IUser;
  onRemove: (user: IUser) => void;
  onEdit: (user: IUser) => void;
};

export function UserTableRow({ user, onRemove, onEdit }: UserTableRowProps) {
  const [menuAnchor, setMenuAnchor] = useState<any>(null);
  const { id, firstName, lastName, email } = user;

  const handleOpenMenu = useCallback((evt: React.MouseEvent<SVGElement>) => {
    setMenuAnchor(evt.currentTarget);

    evt.stopPropagation();
  }, []);

  const handleCloseMenu = useCallback((evt: React.MouseEvent<SVGElement>) => {
    setMenuAnchor(null);

    evt.stopPropagation();
  }, []);

  const handleRemove = () => {
    onRemove(user);
    setMenuAnchor(null);
  };

  const handleEdit = () => {
    onEdit(user);
    setMenuAnchor(null);
  };

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{firstName}</TableCell>
      <TableCell>{lastName}</TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>
        <MoreVertIcon onClick={handleOpenMenu} />
        <UserTableRowMenu
          anchorEl={menuAnchor}
          onRemove={handleRemove}
          onEdit={handleEdit}
          onClose={handleCloseMenu}
        />
      </TableCell>
    </TableRow>
  );
}
