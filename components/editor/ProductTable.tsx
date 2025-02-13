import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ProductContent } from "../../types/product-management";

interface ProductTableProps {
  products: ProductContent[];
  onEdit: (product: ProductContent) => void;
  onDelete: (id: string) => void;
  loading?: boolean;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  onEdit,
  onDelete,
  loading = false,
}) => (
  <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Sản phẩm
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Danh mục
          </th>
          <th
            scope="col"
            className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500"
          >
            Thao tác
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200 bg-white">
        {loading ? (
          <tr>
            <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
              Đang tải dữ liệu...
            </td>
          </tr>
        ) : products.length === 0 ? (
          <tr>
            <td colSpan={3} className="px-6 py-4 text-center text-gray-500">
              Chưa có sản phẩm nào
            </td>
          </tr>
        ) : (
          products.map((product) => (
            <tr key={product.id}>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex items-center">
                  {product.images && (
                    <img
                      src={product.images}
                      alt={product.title}
                      className="h-10 w-10 rounded-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder-image.jpg"; // Add a placeholder image
                        target.onerror = null; // Prevent infinite loop
                      }}
                    />
                  )}
                  <div className="ml-4">
                    <div className="font-medium text-gray-900">
                      {product.title}
                    </div>
                    {product.status === "draft" && (
                      <span className="text-xs text-gray-500">(Bản nháp)</span>
                    )}
                  </div>
                </div>
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-gray-500">
                {product.category}
              </td>
              <td className="whitespace-nowrap px-6 py-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => onEdit(product)}
                    className="text-blue-600 hover:text-blue-900"
                    aria-label={`Sửa ${product.title}`}
                  >
                    <FaEdit className="h-5 w-5" />
                  </button>
                  <button
                    onClick={() => {
                      if (
                        window.confirm(
                          `Bạn có chắc chắn muốn xóa "${product.title}"?`,
                        )
                      ) {
                        onDelete(product.id!);
                      }
                    }}
                    className="text-red-600 hover:text-red-900"
                    aria-label={`Xóa ${product.title}`}
                  >
                    <FaTrash className="h-5 w-5" />
                  </button>
                </div>
              </td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  </div>
);
