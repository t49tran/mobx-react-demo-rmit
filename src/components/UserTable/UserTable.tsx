import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from '@material-ui/core';
import React from 'react';
import { IUser } from 'src/types/User';
import { UserTableRow } from './UserTableRow';

type UserTableProps = {
  users: IUser[];
  onEditUser: (user: IUser) => void;
  onRemoveUser: (user: IUser) => void;
};

// Visual component layer

export function UserTable({ users, onRemoveUser, onEditUser }: UserTableProps) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>ID</TableCell>
          <TableCell>Firstname</TableCell>
          <TableCell>Lastname</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Action</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map((user) => (
          <UserTableRow
            onRemove={onRemoveUser}
            onEdit={onEditUser}
            user={user}
            key={user.id}
          />
        ))}
      </TableBody>
    </Table>
  );
}
