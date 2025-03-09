import ProductDetail_WithData from "@/components/specific/ProductDetail_WithData";
import { getProductBySlug } from "@/components/api/ProductService";
import Breadcrumb from "@/components/common/Breadcrumb";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = await getProductBySlug(params.slug);

  if (!product) {
    notFound();
  }
  return (
    <>
      <Breadcrumb />
      <ProductDetail_WithData product={product} />
    </>
  );
}
