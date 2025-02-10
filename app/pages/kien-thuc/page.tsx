import React from "react";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import SocialButtons from "@/components/specific/SocialButtons";

const NewPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Header />
        <Menu />

        <h1>klien thuc</h1>
      </main>
      <SocialButtons />
      <Footer />
    </div>
  );
};

export default NewPage;
