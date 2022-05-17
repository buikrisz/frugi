import React from 'react';
import { Footer, Header } from '../components';

function Layout({ children }) {
  return (
    <main>
        <Header />
        {children}
        <Footer />
    </main>
  )
}

export default Layout;