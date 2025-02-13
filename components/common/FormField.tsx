import React from "react";

interface FormFieldProps {
  label: string;
  type?: "text" | "url" | "select" | "textarea";
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  description?: string;
  className?: string;
}

export const FormField: React.FC<FormFieldProps> = ({
  label,
  type = "text",
  value,
  onChange,
  required = false,
  placeholder,
  options,
  description,
  className = "",
}) => {
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

  return (
    <div className={`space-y-2 ${className}`}>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      {renderInput()}
      {description && <p className="text-sm text-gray-500">{description}</p>}
    </div>
  );
};
