import React from 'react';
import About from '../../../components/specific/About';
import Footer from '@/components/common/Footer'
import Menu from '@/components/common/Menu'
import Header from '@/components/common/Header'


const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <Menu/>
      <main className="flex-grow">
        <About />
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;