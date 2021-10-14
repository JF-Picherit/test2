import React from 'react';
import cx from 'clsx';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Row, Item } from '@mui-treasury/components/flex';
import { useDynamicAvatarStyles } from '@mui-treasury/styles/avatar/dynamic';
import usePersonStyles from './style/usePersonnStyles';

const PersonItem = ({ src, name, friendCount }) => {
    const avatarStyles = useDynamicAvatarStyles({ size: 56 });
    const styles = usePersonStyles();
    return (
      <Row gap={2} p={2.5}>
        <Item>
          <Avatar classes={avatarStyles} src={src} />
        </Item>
        <Row wrap grow gap={0.5} minWidth={0}>
          <Item grow minWidth={0}>
            <div className={cx(styles.name, styles.text)}>{name}</div>
            <div className={cx(styles.caption, styles.text)}>
              {friendCount} mutual friends
            </div>
          </Item>
          <Item position={'middle'}>
            <Button className={styles.btn} variant={'outlined'}>
              Follow
            </Button>
          </Item>
        </Row>
      </Row>
    );
  };

export default PersonItem;