"user client";
import React, { useState } from "react";

interface FormFieldProps {
  label: string;
  type?: "text" | "url" | "select" | "textarea" | "range";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  description?: string;
  className?: string;
  textLength?: number;
}

export const FormField: React.FC<FormFieldProps> = ({
  label = "",
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  options,
  description,
  className = "",
  textLength = 0,
}) => {
  const [hotLevel, setHotLevel] = useState(value);
  // Danh sách mức độ HOT
  const hotLabels = [
    "❄️ Cool",
    "🔥 Warm",
    "🔥🔥 Hot",
    "🔥🔥🔥 Very Hot",
    "🔥🔥🔥🔥 Extreme",
  ];
  const handleRange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setHotLevel(e.target.value);
    onChange(e.target.value);
  };
  const baseInputClasses =
    "w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none";

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            required={required}
          >
            <option value="">Chọn {label.toLowerCase()}</option>
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );

      case "textarea":
        return (
          <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            required={required}
            placeholder={placeholder}
            rows={4}
          />
        );
      case "range":
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => handleRange(e)}
            className={baseInputClasses}
            required={required}
            placeholder={placeholder}
            min="0"
            max="4"
          />
        );
      default:
        return (
          <input
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={baseInputClasses}
            required={required}
            placeholder={placeholder}
          />
        );
    }
  };

  const renderTextLength = () => {
    switch (label) {
      case "SEO Title":
      case "Tên sản phẩm":
        return (
          <label className="block text-sm font-medium text-gray-700">
            {label}{" "}
            <span className="ml-10 text-gray-400">
              {" "}
              Độ dài text: {textLength}
            </span>
          </label>
        );
      case "SEO Description":
        return (
          <label className="block text-sm font-medium text-gray-700">
            {label}{" "}
            <span className="ml-10 text-gray-400">
              {" "}
              Độ dài text 150 - 160: {textLength}
            </span>
          </label>
        );
      case "Mô tả":
        return (
          <label className="block text-sm font-medium text-gray-700">
            {label}{" "}
            <span className="ml-10 text-gray-400">
              {" "}
              Độ dài text: {textLength}
            </span>
          </label>
        );
      case "Độ hot":
        return (
          <label className="block text-sm font-medium text-gray-700">
            {label}{" "}
            <span className="text-2xl font-semibold">
              {hotLabels[Number(hotLevel)]}
            </span>
          </label>
        );
      default:
        return (
          <label className="block text-sm font-medium text-gray-700">
            {label}
          </label>
        );
    }
  };
  return (
    <div className={`space-y-2 ${className}`}>
      {renderTextLength()}
      {renderInput()}
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};
