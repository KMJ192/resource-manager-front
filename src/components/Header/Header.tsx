import React from 'react';
import { useSetRecoilState } from 'recoil';
import cloneDeep from 'lodash/cloneDeep';

// store
import { TemplateAtom } from '@src/store/layout/global/template';

// CSS Module
import classNames from 'classnames/bind';
import style from './Header.module.scss';
const cx = classNames.bind(style);

function Header() {
  const setTemplateAtom = useSetRecoilState<TemplateAtom.TemplateAtomType>(
    TemplateAtom.templateAtom,
  );

  const onClickToggle = () => {
    setTemplateAtom((templateAtom: TemplateAtom.TemplateAtomType) => {
      const newState = cloneDeep(templateAtom);
      newState.nav = newState.nav === 0 ? 1 : 0;
      return newState;
    });
  };

  return (
    <header className={cx('header')}>
      <div className={cx('toggle-btn')} onClick={onClickToggle}>
        btn
      </div>
      <div>right</div>
    </header>
  );
}

export default Header;
