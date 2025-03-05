import Banner from "../components/specific/Banner";
import ItemList from "../components/common/ItemList";
import HowItWorks from "../components/specific/HowItWork";
import Testimonials from "../components/specific/Testimonials";
import NeonLogo from "@/components/specific/NeonLogo";

export default function Home() {
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
          <ItemList
            EditorContent={{
              title: "Bảng Hiệu",
              content: "",
              images: "",
              category: "banghieu",
              slug: "bang-hieu",
              description: "Các mẫu bảng hiệu đẹp, chất lượng cao",
              tags: ["bảng hiệu", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Bảng hiệu - Siêu Thị Bảng hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại Bảng hiệu quảng cáo chất lượng cao",
              featuredImage: "path/to/image.jpg",
              thumbnail: "path/to/thumbnail.jpg",
            }}
            maxResults=""
          />
        </section>
        <section className="bg-gray-50" aria-label="Hộp đèn">
          <ItemList
            EditorContent={{
              title: "Hộp đèn",
              content: "",
              images: "",
              category: "hopden",
              slug: "hop-den",
              description: "Các mẫu hộp đèn đẹp, chất lượng cao",
              tags: ["hộp đèn", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Hộp đèn - Siêu Thị Bảng Hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại hộp đèn quảng cáo chất lượng cao",
              featuredImage: "path/to/image.jpg",
              thumbnail: "path/to/thumbnail.jpg",
            }}
          />
        </section>
        <section aria-label="Chữ nổi">
          <ItemList
            EditorContent={{
              title: "Chữ nổi",
              content: "",
              images: "",
              category: "chunoi",
              slug: "chu-noi",
              description: "Các mẫu chữ nổi đẹp, chất lượng cao",
              tags: ["chữ nổi", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Chữ nổi - Siêu Thị Bảng Hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại chữ nổi quảng cáo chất lượng cao",
              featuredImage: "path/to/image.jpg",
              thumbnail: "path/to/thumbnail.jpg",
            }}
          />
        </section>
        <section className="bg-gray-50" aria-label="Standee">
          <ItemList
            EditorContent={{
              title: "Standee",
              content: "",
              images: "",
              category: "standee",
              slug: "standee",
              description: "Các mẫu bảng standee đẹp, chất lượng cao",
              tags: ["standee", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "standee- Siêu Thị Bảng Hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại bảng standee quảng cáo chất lượng cao",
              featuredImage: "path/to/image.jpg",
              thumbnail: "path/to/thumbnail.jpg",
            }}
          />
        </section>
        <section className="bg-gray-50" aria-label="Biển Bạt">
          <ItemList
            EditorContent={{
              title: "Biển Bạt",
              content: "",
              images: "",
              category: "bienbat",
              slug: "bien-bat",
              description: "Các mẫu bảng Biển Bạt đẹp, chất lượng cao",
              tags: ["biển Bạt", "quảng cáo"],
              status: "published",
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
              seoTitle: "Biển Bạt- Siêu Thị Bảng Hiệu",
              seoDescription:
                "Chuyên thiết kế và thi công các loại bảng Biển Bạt quảng cáo chất lượng cao",
              featuredImage: "path/to/image.jpg",
              thumbnail: "path/to/thumbnail.jpg",
            }}
          />
        </section>
        <section aria-label="Đánh giá khách hàng">
          <Testimonials />
        </section>
      </main>
    </div>
  );
}
