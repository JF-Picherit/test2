import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => ({
    card: {
      width: '100%',
      borderRadius: 16,
      boxShadow: '0 8px 16px 0 #BDC9D7',
      overflow: 'hidden',
    },
    header: {
      fontFamily: 'Barlow, san-serif',
      backgroundColor: '#fff',
    },
    headline: {
      color: '#122740',
      fontSize: '1.25rem',
      fontWeight: 600,
    },
    link: {
      color: '#2281bb',
      padding: '0 0.25rem',
      fontSize: '0.875rem',
    },
    actions: {
      color: '#BDC9D7'
    },
    divider: {
      backgroundColor: '#d9e2ee',
      margin: '0 20px',
    }
  }));

export default useStyles;