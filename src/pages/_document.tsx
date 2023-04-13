import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar />
        <div className="p-5">
          <Main />
        </div>
        <Footer />
        <NextScript />
      </body>
    </Html>
  )
}
