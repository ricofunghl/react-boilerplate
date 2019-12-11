import React from 'react';
import Typography from '@material-ui/core/Typography';
import useStyles from './HomepageStyles';

const Homepage = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <Typography variant='h1' classes={{root:styles.title}}>AIMTRACKS</Typography>
            <Typography variant='subtitle1' classes={{root:styles.subtitle}}>AIMCo Membership Tracking System</Typography>
        </div>
    );
}

export default Homepage;