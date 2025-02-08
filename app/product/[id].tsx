import { useRouter } from 'next/router';
import Image from 'next/image';

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Product Detail</h1>
      <p>Product ID: {id}</p>
      <Image
        src={`/images/bienquangcao.jpg`} // Placeholder image, can be updated based on the product ID
        alt={`Product ${id}`}
        width={600}
        height={400}
        className="object-cover rounded-lg"
      />
      <p className="mt-4">Details about product {id} will be displayed here.</p>
    </div>
  );
};

export default ProductDetail;
