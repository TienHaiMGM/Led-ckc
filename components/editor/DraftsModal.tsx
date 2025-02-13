import React from "react";
import { FaEdit, FaTrash, FaTimes } from "react-icons/fa";
import { Draft } from "../../types/product-management";

interface DraftsModalProps {
  drafts: Draft[];
  onClose: () => void;
  onLoadDraft: (id: string) => Promise<boolean>;
  onDeleteDraft: (id: string) => Promise<boolean>;
}

export const DraftsModal: React.FC<DraftsModalProps> = ({
  drafts,
  onClose,
  onLoadDraft,
  onDeleteDraft,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-auto bg-black bg-opacity-50 p-4">
    <div className="w-full max-w-2xl rounded-lg bg-white shadow-xl">
      <div className="border-b p-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Danh sách bản nháp</h2>
          <button
            onClick={onClose}
            className="rounded p-1 hover:bg-gray-100"
            aria-label="Đóng"
          >
            <FaTimes className="h-5 w-5 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="max-h-[60vh] overflow-y-auto p-4">
        {drafts.length === 0 ? (
          <p className="text-center text-gray-500">Không có bản nháp nào</p>
        ) : (
          <div className="space-y-4">
            {drafts.map((draft) => (
              <div
                key={draft.id}
                className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="mb-2 flex items-start justify-between">
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {draft.title || "Bản nháp không có tiêu đề"}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Chỉnh sửa lần cuối:{" "}
                      {new Date(draft.lastModified).toLocaleString()}
                    </p>
                  </div>
                  <div className="flex space-x-2">
                    <button
                      onClick={async () => {
                        if (draft.id) {
                          const success = await onLoadDraft(draft.id);
                          if (success) {
                            onClose();
                          }
                        }
                      }}
                      className="flex items-center rounded-lg bg-blue-50 px-3 py-1.5 text-sm font-medium text-blue-600 hover:bg-blue-100"
                    >
                      <FaEdit className="mr-1.5 h-4 w-4" /> Tải
                    </button>
                    <button
                      onClick={async () => {
                        if (
                          draft.id &&
                          window.confirm(
                            "Bạn có chắc chắn muốn xóa bản nháp này?",
                          )
                        ) {
                          await onDeleteDraft(draft.id);
                        }
                      }}
                      className="flex items-center rounded-lg bg-red-50 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-100"
                    >
                      <FaTrash className="mr-1.5 h-4 w-4" /> Xóa
                    </button>
                  </div>
                </div>
                {draft.description && (
                  <p className="mt-2 line-clamp-2 text-sm text-gray-600">
                    {draft.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </div>
);
