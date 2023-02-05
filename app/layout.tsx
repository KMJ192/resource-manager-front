import React from 'react';
import PageTemplate from '@src/components/PageTemplate/PageTemplate';

// import classNames from 'classnames/bind';
// import style from

import '@styles/globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head>
        <title>test</title>
      </head>
      <body>
        <PageTemplate>{children}</PageTemplate>
      </body>
    </html>
  );
}
