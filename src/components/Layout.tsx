import type { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Layout({ activePath, children }: { activePath: string; children: ReactNode }) {
  return (
    <>
      <a className="skip-link" href="#content">Skip to content</a>
      <Header activePath={activePath} />
      <main id="content" className="container">{children}</main>
      <Footer />
    </>
  );
}
