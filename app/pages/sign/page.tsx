"use client";
import Header from "components/common/Header";
import Footer from "components/common/Footer";
import Menu from "components/common/Menu";
import ProductListingPage from "components/specific/ProductListingPage";
import SocialButtons from "@/components/specific/SocialButtons";

interface SignPageProps {
  initialProducts: {
    id: string;
    title: string;
    description?: string;
    image: string;
    price?: number;
    category?: string;
    createdAt?: string;
  }[];
}

const SignPage = ({ initialProducts }: SignPageProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <Header />
      <Menu />
      <ProductListingPage initialProducts={initialProducts} />
      <SocialButtons />
      <Footer />
    </div>
  );
};

export default SignPage;
