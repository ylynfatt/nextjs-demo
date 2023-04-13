import { Html, Head, Main, NextScript } from 'next/document'
import Nav from '@/components/Nav.tsx';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="p-5">
        <Nav />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
