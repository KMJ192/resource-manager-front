import React from 'react';

import classNames from 'classnames/bind';
import style from './Footer.module.scss';
const cx = classNames.bind(style);

function Footer() {
  return <footer className={cx('footer')}>footer</footer>;
}

export default Footer;
