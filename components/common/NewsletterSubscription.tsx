"use client";

import React from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function NewsletterSubscription() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const emailInput = e.currentTarget.querySelector(
      'input[type="email"]',
    ) as HTMLInputElement;
    const email = emailInput.value;

    if (!email) {
      alert("Vui lòng nhập email của bạn");
      return;
    }

    try {
      await addDoc(collection(db, "newsletter-subscriptions"), {
        email,
        createdAt: serverTimestamp(),
        status: "active",
      });

      alert("Đăng ký nhận tin thành công!");
      emailInput.value = "";
    } catch (error) {
      console.error("Error adding subscription: ", error);
      alert("Có lỗi xảy ra. Vui lòng thử lại sau.");
    }
  };

  return (
    <div className="mt-12 rounded-xl bg-white p-6 shadow-sm md:mt-16 md:p-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="mb-4 text-xl font-bold md:text-2xl">
          Đăng ký nhận tin tức mới nhất
        </h2>
        <p className="mb-6 text-gray-600">
          Cập nhật những thông tin mới nhất về ngành bảng hiệu quảng cáo
        </p>
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row"
        >
          <input
            type="email"
            placeholder="Nhập email của bạn"
            className="flex-grow rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
            required
          />
          <button
            type="submit"
            className="rounded-lg bg-red-600 px-6 py-2 text-white transition-colors hover:bg-red-700"
          >
            Đăng ký
          </button>
        </form>
      </div>
    </div>
  );
}
