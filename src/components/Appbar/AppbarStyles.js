import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,      
    },
    appbar: {
        backgroundColor: '#004080',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
        float:'right',
      flexGrow: 1,
    },
    active: {
        textDecoration: 'underline',
    },
  }));

export default useStyles;