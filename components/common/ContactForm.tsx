"use client";

import React, { useState, useEffect } from "react";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  where,
  getDocs,
  Timestamp,
} from "firebase/firestore";
import { db } from "../../lib/firebase";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const FORM_LIMIT = 5;
const RESET_MINUTES = 1; // 1 minute as per requirement

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [userIP, setUserIP] = useState<string>("");
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formCount, setFormCount] = useState(0);
  const [remainingTime, setRemainingTime] = useState<number | null>(null);

  // Fetch user's IP address when component mounts
  useEffect(() => {
    const getIP = async () => {
      try {
        const response = await fetch("/api/get-ip");
        const data = await response.json();
        if (data.ip) {
          setUserIP(data.ip);
        }
      } catch (error) {
        console.error("Error fetching IP:", error);
      }
    };
    getIP();
  }, []);

  const checkFormLimit = async () => {
    if (!userIP) {
      return false;
    }

    try {
      // Get current time and time 1 minute ago
      const now = Timestamp.now();
      const oneMinuteAgo = new Timestamp(
        now.seconds - RESET_MINUTES * 60,
        now.nanoseconds,
      );

      // Query submissions from this IP in the last minute
      const contactsRef = collection(db, "contact-requests");
      const q = query(contactsRef, where("ipAddress", "==", userIP));

      const querySnapshot = await getDocs(q);

      // Filter submissions within the last minute
      const recentSubmissions = querySnapshot.docs
        .map((doc) => ({
          ...doc.data(),
          createdAt: doc.data().createdAt?.toDate(), // Convert Timestamp to Date
        }))
        .filter(
          (submission) =>
            submission.createdAt &&
            submission.createdAt >= oneMinuteAgo.toDate(),
        );

      const count = recentSubmissions.length;

      setFormCount(count);

      if (count >= FORM_LIMIT && recentSubmissions.length > 0) {
        // Sort submissions by creation time
        recentSubmissions.sort(
          (a, b) => a.createdAt.getTime() - b.createdAt.getTime(),
        );

        // Get the oldest submission's time
        const oldestSubmission = recentSubmissions[0];
        if (oldestSubmission && oldestSubmission.createdAt) {
          const resetTime = new Date(
            oldestSubmission.createdAt.getTime() + RESET_MINUTES * 60 * 1000,
          );
          const timeLeft = resetTime.getTime() - Date.now();

          if (timeLeft > 0) {
            console.log(`Rate limit reached. ${timeLeft}ms remaining`);
            setRemainingTime(timeLeft);
            return false;
          }
        }
      }

      setRemainingTime(null);
      return true;
    } catch (error) {
      console.error("Error checking form limit:", error);
      return false;
    }
  };

  useEffect(() => {
    if (userIP) {
      checkFormLimit();
    }
  }, [userIP]);

  useEffect(() => {
    if (!userIP) return;

    const interval = setInterval(() => {
      if (remainingTime !== null && remainingTime > 1000) {
        setRemainingTime((prev) => prev! - 1000);
      } else if (remainingTime !== null && remainingTime <= 1000) {
        setRemainingTime(null);
        checkFormLimit();
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [remainingTime, userIP]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userIP) {
      setStatus({
        type: "error",
        message: "Đang khởi tạo hệ thống, vui lòng thử lại sau vài giây.",
      });
      return;
    }

    const canSubmit = await checkFormLimit();
    if (!canSubmit) {
      const timeString = remainingTime
        ? ` (còn ${Math.ceil(remainingTime / 1000)} giây)`
        : "";
      setStatus({
        type: "error",
        message: `Đã vượt quá giới hạn gửi form (${FORM_LIMIT} form/${RESET_MINUTES} phút)${timeString}`,
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const contactsRef = collection(db, "contact-requests");
      const docRef = await addDoc(contactsRef, {
        ...formData,
        ipAddress: userIP,
        createdAt: serverTimestamp(),
        status: "new",
        source: "website_form",
      });

      console.log("Form submitted successfully with ID:", docRef.id);

      setStatus({
        type: "success",
        message: "Yêu cầu của bạn đã được gửi thành công!",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });

      // Update form count after successful submission
      await checkFormLimit();
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus({
        type: "error",
        message: "Có lỗi xảy ra, vui lòng thử lại sau",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatRemainingTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const isLimitReached = formCount >= FORM_LIMIT && remainingTime !== null;

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-4 lg:mx-auto lg:max-w-4xl lg:p-6"
    >
      <div className="mb-4 text-sm">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">
            Đã gửi {formCount}/{FORM_LIMIT} form trong {RESET_MINUTES} phút qua
          </span>
          {remainingTime !== null && (
            <span className="font-medium text-orange-600">
              Còn lại: {formatRemainingTime(remainingTime)}
            </span>
          )}
        </div>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-6">
        <div className="mb-4">
          <input
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
            type="text"
            id="name"
            name="name"
            placeholder="Họ và Tên"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isLimitReached}
          />
        </div>
        <div className="mb-4">
          <input
            className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Số điện thoại"
            value={formData.phone}
            onChange={handleChange}
            required
            disabled={isLimitReached}
          />
        </div>
      </div>
      <div className="mb-4">
        <input
          className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={isLimitReached}
        />
      </div>
      <div className="mb-4">
        <textarea
          className="w-full rounded border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 lg:py-3"
          id="message"
          name="message"
          rows={4}
          placeholder="Nội dung yêu cầu"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={isLimitReached}
        ></textarea>
      </div>

      {status.message && (
        <div
          className={`mb-4 rounded-lg p-4 ${
            status.type === "success"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || isLimitReached || !userIP}
        className={`w-full rounded-lg bg-blue-600 px-4 py-2 text-white transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
          isSubmitting || isLimitReached || !userIP
            ? "cursor-not-allowed opacity-50"
            : ""
        }`}
      >
        {isSubmitting ? "Đang gửi..." : "Gửi yêu cầu"}
      </button>
    </form>
  );
};

export default ContactForm;
