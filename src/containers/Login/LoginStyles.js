import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    card: {
        maxWidth: 500,
        minWidth: 275,
        margin: '30px auto 0 auto',
        padding: 20,
    },
    cardActions: {
        float: 'right',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default useStyles;