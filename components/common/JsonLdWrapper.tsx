import React from "react";
import JsonLdScript from "./JsonLdScript";

interface JsonLdWrapperProps {
  data: object;
  type?: string;
}

const JsonLdWrapper: React.FC<JsonLdWrapperProps> = ({
  data,
  type = "application/ld+json",
}) => {
  return <JsonLdScript data={data} type={type} />;
};

export default JsonLdWrapper;
