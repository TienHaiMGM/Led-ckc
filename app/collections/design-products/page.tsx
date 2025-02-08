import Footer from '@/components/common/Footer'
import Menu from '@/components/common/Menu'
import Header from '@/components/common/Header'
import ProductCategory from "../../../components/ProductCategory";

const DesignProducts = () => {
  return <div className="flex flex-col min-h-screen">
  <main className="flex-grow">
    <Header />
    <Menu />
    <ProductCategory />
  </main>
  <Footer />
</div>
};

export default DesignProducts;
