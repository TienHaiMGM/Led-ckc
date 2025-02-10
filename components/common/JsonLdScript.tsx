import React from "react";
import JsonLd from "./JsonLd";

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

interface JsonLdScriptProps {
  type: string;
  data: JsonLdObject;
}

const JsonLdScript = ({ type, data }: JsonLdScriptProps) => {
  return <JsonLd type={type} data={data} />;
};

export default JsonLdScript;
