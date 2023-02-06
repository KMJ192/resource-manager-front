'use client';

import React from 'react';
import { RecoilRoot } from 'recoil';
import PageTemplate from '@src/components/PageTemplate/PageTemplate';

type Props = {
  children: React.ReactNode;
};

function Root({ children }: Props) {
  return (
    <RecoilRoot>
      <PageTemplate>{children}</PageTemplate>;
    </RecoilRoot>
  );
}

export default Root;
