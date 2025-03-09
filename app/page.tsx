import Banner from "../components/specific/Banner";
import ItemList from "../components/common/ItemList";
import HowItWorks from "../components/specific/HowItWork";
import Testimonials from "../components/specific/Testimonials";
import NeonLogo from "@/components/specific/NeonLogo";
import { getProductByCategory } from "@/components/api/ProductService";

export default async function Home() {
  const banghieu = await getProductByCategory("banghieu");
  const hopDen = await getProductByCategory("hopden");
  const chunoi = await getProductByCategory("chunoi");
  const standee = await getProductByCategory("standee");
  return (
    <div className="flex min-h-screen flex-col">
      <main>
        <Banner />
        <section aria-label="Giới thiệu dịch vụ">
          <HowItWorks />
        </section>
        <section className="bg-gray-50" aria-label="Danh mục sản phẩm">
          {/* <ExploreCategories /> */}
          <NeonLogo />
        </section>
        <section aria-label="Bảng hiệu">
          <ItemList products={banghieu} title="Bảng hiệu" slug="bang-hieu" />
        </section>
        <section className="bg-gray-50" aria-label="Hộp đèn">
          <ItemList products={hopDen} title="Hộp đèn" slug="hop-den" />
        </section>
        <section aria-label="Chữ nổi">
          <ItemList products={chunoi} title="Chữ nổi" slug="chu-noi" />
        </section>
        <section className="bg-gray-50" aria-label="Standee">
          <ItemList products={standee} title="Standee" slug="standee" />
        </section>
        <section aria-label="Đánh giá khách hàng">
          <Testimonials />
        </section>
      </main>
    </div>
  );
}
