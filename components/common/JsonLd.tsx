"use client";
import React from "react";

type JsonLdValue =
  | string
  | number
  | boolean
  | null
  | JsonLdObject
  | JsonLdValue[];

interface JsonLdObject {
  [key: string]: JsonLdValue;
}

interface JsonLdProps {
  type: string;
  data: JsonLdObject;
}

const JsonLd: React.FC<JsonLdProps> = ({ type, data }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };

  // Ensure consistent JSON stringification between server and client
  const jsonString = JSON.stringify(jsonLd, null, 0);

  return (
    <script
      key={`jsonld-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: jsonString }}
    />
  );
};

export default JsonLd;
