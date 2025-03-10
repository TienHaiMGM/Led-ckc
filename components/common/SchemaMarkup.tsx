import Script from "next/script";

interface SchemaProps {
  schemaData: object;
}

export default function SchemaMarkup({ schemaData }: SchemaProps) {
  return (
    <Script
      id="schema-markup"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
    />
  );
}
