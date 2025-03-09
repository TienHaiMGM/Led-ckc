import ProductCategory from "../../../components/common/ProductCategory";
import Breadcrumb from "../../../components/common/Breadcrumb";
import { getProductByCategory } from "@/components/api/ProductService";

export default async function BangTenCongTyPage() {
  const product = await getProductByCategory("bangtencongty", 8);
  return (
    <div className="flex min-h-screen flex-col">
      <Breadcrumb />
      <main className="flex-grow p-0">
        <ProductCategory product={product} title="Bảng công ty" />
      </main>
    </div>
  );
}
