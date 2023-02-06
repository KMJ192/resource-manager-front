import React from 'react';

import { useRecoilState, useRecoilValue } from 'recoil';

import cloneDeep from 'lodash/cloneDeep';

// store
import { UserAtom } from '@src/store/user';
import { TemplateAtom } from '@src/store/layout/global/template';

// CSS Module
import classNames from 'classnames/bind';
import styles from './SideNav.module.scss';
import { NavAtom } from '@src/store/layout/global/nav';
const cx = classNames.bind(styles);

function SideNav() {
  const userAtom = useRecoilValue<UserAtom.UserAtomType>(UserAtom.userAtom);
  const templateAtom = useRecoilValue<TemplateAtom.TemplateAtomType>(
    TemplateAtom.templateAtom,
  );
  const [navAtom, setNavAtom] = useRecoilState<NavAtom.NavDrawerModel>(
    NavAtom.navAtom,
  );

  const onClickAddDrawer = () => {
    console.log(1);
    setNavAtom((navAtom) => {
      const newState = cloneDeep(navAtom);
      newState.drawer.push({
        name: `새 서랍${newState.drawer.length}`,
        count: 0,
      });
      return newState;
    });
  };

  const onEditDrawer = (index: number) => {};

  return (
    <nav className={cx('side-nav', templateAtom.nav === 0 ? 'close' : 'open')}>
      <div className={cx('username')}>{userAtom.userName}</div>
      <div className={cx('drawer')}>
        <div className={cx('add-drawer')} onClick={onClickAddDrawer}>
          새 서랍 추가 +
        </div>
        <ul className={cx('drawers')}>
          {navAtom.drawer.map((drawer, idx) => {
            return (
              <li
                className={cx('contents')}
                key={idx}
                onClick={() => {
                  onEditDrawer(idx);
                }}
              >
                <span className={cx('text')}>
                  {drawer.name}({drawer.count})
                </span>
                <div className={cx('thing')}>{'<'}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default SideNav;
