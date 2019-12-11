import React from 'react';
import { NavLink } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './AppbarStyles';

const Appbar = () => {
  const styles = useStyles();
  const navLink = React.forwardRef((props, ref) => <div ref={ref}><NavLink {...props} /></div>)

  return (
    <div className={styles.root}>
      <AppBar position="static" className={styles.appbar}>
        <Toolbar>
          <IconButton edge="start" className={styles.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={styles.title}>
            AIMTRACKS
            </Typography>

            <Button color="inherit" component={navLink} to='/' exact activeClassName={styles.active}>Home</Button>
  
          <Button color="inherit" component={navLink} to='/Login' exact activeClassName={styles.active}>Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Appbar;