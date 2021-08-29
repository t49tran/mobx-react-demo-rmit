import { Theme, makeStyles } from '@material-ui/core';

export const useDefaultDialogStyles = makeStyles<Theme>(
  ({ spacing, palette: { primary }, breakpoints }) => ({
    dialogContainer: {
      position: 'relative',
      padding: spacing(3, 2)
    },
    dialogLinear: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0
    },
    dialogHeading: {
      color: primary.main,
      fontSize: 23,
      fontWeight: 500,
      paddingTop: spacing(3),
      [breakpoints.up('sm')]: {
        paddingTop: 0
      }
    },
    dialogHeader: {
      display: 'flex',
      justifyContent: 'space-between',
      paddingBottom: spacing(3),
      flex: '0 0 auto',
      [breakpoints.up('sm')]: {
        alignItems: 'center'
      }
    },
    dialogCloseIcon: {
      opacity: 0.3,
      cursor: 'pointer',
      transition: 'all 1s',
      '&:hover': {
        opacity: 1
      }
    }
  })
);
