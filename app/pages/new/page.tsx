import React from 'react';
import About from '@/components/specific/About';
import Footer from '@/components/common/Footer'
import Menu from '@/components/common/Menu'
import Header from '@/components/common/Header'


const NewPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Header/>
        <Menu/>
        <About />
        <h1>test</h1>
      </main>
      <Footer />
    </div>
  );
};

export default NewPage;