import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Menu from "../../../components/Menu";
import ProductCategory from "../../../components/ProductCategory";

const LedBoard = () => {
  return <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
    <Header />
    <Menu />
    <ProductCategory />
  </main>
  <Footer />
</div>
};

export default LedBoard;
