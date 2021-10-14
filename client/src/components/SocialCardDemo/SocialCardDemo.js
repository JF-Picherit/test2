import React from 'react';
import NoSsr from '@material-ui/core/NoSsr';
import GoogleFontLoader from 'react-google-font-loader';
import Divider from '@material-ui/core/Divider';
import Link from '@material-ui/core/Link';
import useStyles from './style/useStyles';
import { Column, Row, Item } from '@mui-treasury/components/flex';
import PersonItem from './PersonItem/PersonItem';

const SocialCardDemo = React.memo(function SocialCard() {
    const styles = useStyles();
    return (
      <>
      <br></br><br></br><br></br><br></br><br></br>
        <NoSsr>
          <GoogleFontLoader fonts={[{ font: 'Barlow', weights: [400, 600] }]} />
        </NoSsr>
        <Column p={0} gap={0} className={styles.card}>
          <Row wrap p={2} alignItems={'baseline'} className={styles.header}>
            <Item stretched className={styles.headline}>Who to follow</Item>
            <Item className={styles.actions}>
              <Link className={styles.link}>Refresh</Link> •{' '}
              <Link className={styles.link}>See all</Link>
            </Item>
          </Row>
          <PersonItem name={'Amber Matthews'} friendCount={6} src={'https://i.pravatar.cc/300?img=10'} />
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Russel Robertson'} friendCount={2} src={'https://i.pravatar.cc/300?img=20'} />
          <Divider variant={'middle'} className={styles.divider} />
          <PersonItem name={'Kathleen Ellis'} friendCount={2} src={'https://i.pravatar.cc/300?img=30'} />
        </Column>
      </>
    );
  });

  export default SocialCardDemo;