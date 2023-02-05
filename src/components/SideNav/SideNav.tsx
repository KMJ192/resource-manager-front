import React from 'react';

import classNames from 'classnames/bind';
import styles from './SideNav.module.scss';
const cx = classNames.bind(styles);

function SideNav() {
  return <nav className={cx('side-nav')}>nav</nav>;
}

export default SideNav;
