import { makeStyles, Theme } from '@material-ui/core';

export const useFormStyles = makeStyles<Theme>(({ spacing }) => ({
  field: {
    paddingBottom: spacing(3),
    width: '100%'
  }
}));
