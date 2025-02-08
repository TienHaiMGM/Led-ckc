import React from 'react';
import Footer from '../../components/Footer';
import About from '../../components/About';
import AddProductForm from '../../components/api/AddProductForm';


const AboutPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <About />
        <h1>test</h1>
        <AddProductForm/>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;