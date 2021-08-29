import { Menu, MenuItem, MenuProps } from '@material-ui/core';
import React from 'react';

type UserTableRowMenuProps = Omit<MenuProps, 'open'> & {
  onEdit: (event?: React.MouseEvent) => void;
  onRemove: (event?: React.MouseEvent) => void;
};

export const UserTableRowMenu: React.FC<UserTableRowMenuProps> = ({
  anchorEl,
  onClose,
  onEdit,
  onRemove
}) => (
  <Menu
    keepMounted
    id="lock-menu"
    anchorEl={anchorEl}
    open={Boolean(anchorEl)}
    onClose={onClose}
  >
    <MenuItem onClick={onEdit}>Edit</MenuItem>
    <MenuItem onClick={onRemove}>Remove</MenuItem>
  </Menu>
);
