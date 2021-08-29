import * as React from 'react';
import {
  Dialog,
  DialogProps,
  Typography,
  LinearProgress
} from '@material-ui/core';
import { useDefaultDialogStyles } from './styles';
import CloseIcon from '@material-ui/icons/Close';
import clsx from 'clsx';

export interface IDefaultDialogProps extends Omit<DialogProps, 'classes'> {
  isLoading?: boolean;
  classes?: DialogProps['classes'] & { title?: string; header?: string };
}

export const DefaultDialog: React.FC<IDefaultDialogProps> = ({
  title,
  children,
  onClose,
  isLoading = false,
  classes,
  ...props
}) => {
  const {
    dialogContainer,
    dialogHeader,
    dialogHeading,
    dialogCloseIcon,
    dialogLinear
  } = useDefaultDialogStyles();

  return (
    <Dialog
      onClose={onClose}
      classes={{ paper: clsx(dialogContainer, classes && classes.paper) }}
      {...props}
    >
      {isLoading && (
        <LinearProgress color="secondary" className={dialogLinear} />
      )}
      <div className={clsx(dialogHeader, classes && classes.header)}>
        <Typography className={clsx(dialogHeading, classes && classes.title)}>
          {title}
        </Typography>
        <CloseIcon
          data-testid="dialog-close-button"
          onClick={onClose as any}
          className={dialogCloseIcon}
        />
      </div>
      {children}
    </Dialog>
  );
};
