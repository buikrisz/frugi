import React from 'react';
import { ContactSection, Footer, Header } from '../components';

function Layout({ children }) {
  return (
    <main>
        <Header />
        {children}
        <ContactSection />
        <Footer />
    </main>
  )
}

export default Layout;