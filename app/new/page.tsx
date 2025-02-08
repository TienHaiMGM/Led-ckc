import React from 'react';
import Footer from '../../components/Footer';
import About from '../../components/About';
import AddProductForm from '../../components/api/AddProductForm';
import Menu from '../../components/Menu';
import Header from '../../components/Header';


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