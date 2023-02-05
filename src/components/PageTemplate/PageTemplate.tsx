import React from 'react';

import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideNav from '../SideNav/SideNav';

import classNames from 'classnames/bind';
import style from './PageTemplate.module.scss';
const cx = classNames.bind(style);

type Props = {
  children: React.ReactNode;
};

function PageTemplate({ children }: Props) {
  return (
    <article className={cx('template')}>
      <SideNav />
      <article className={cx('main')}>
        <Header />
        <main className={cx('contents')}>{children}</main>
        <Footer />
      </article>
    </article>
  );
}

export default PageTemplate;
