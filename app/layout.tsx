import React from 'react';
import Root from './Root';

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
        <Root>{children}</Root>
      </body>
    </html>
  );
}
