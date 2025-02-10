import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Header from "@/components/common/Header";
import ProductCategory from "../../../components/common/ProductCategory";

const RaisedLetters = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Header />
        <Menu />
        <ProductCategory title="Chữ nổi" />
      </main>
      <Footer />
    </div>
  );
};

export default RaisedLetters;
