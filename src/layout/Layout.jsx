import React from 'react';
import { ContactSection, Header } from '../components';

function Layout({ children }) {
  return (
    <main>
        <Header />
        {children}
        <ContactSection />
    </main>
  )
}

export default Layout;