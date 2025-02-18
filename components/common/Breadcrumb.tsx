"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const Breadcrumb = () => {
  const pathname = usePathname();

  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    const paths = pathname.split("/").filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: "Trang chủ", path: "/" }];
    let currentPath = "";
    paths.forEach((path) => {
      currentPath += `/${path}`;
      const label = path
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
      breadcrumbs.push({ label, path: currentPath });
    });
    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  if (pathname === "/") return null;

  // Generate JSON-LD schema
  const jsonLdSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: `https://yourwebsite.com${item.path}`, // Update with your website's URL
    })),
  };

  return (
    <>
      <nav
        className="flex rounded-lg border border-gray-200 bg-gray-50 px-5 py-3 text-gray-700 dark:border-gray-700 dark:bg-gray-800"
        aria-label="Breadcrumb"
      >
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          {breadcrumbs.map((item, index) => (
            <li key={item.path} className="inline-flex items-center">
              {index > 0 && (
                <svg
                  className="mx-1 h-3 w-3 text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 6 10"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 9 4-4-4-4"
                  />
                </svg>
              )}
              <Link
                href={item.path}
                className={`inline-flex items-center text-sm font-medium ${
                  index === breadcrumbs.length - 1
                    ? "text-blue-600 dark:text-blue-500"
                    : "text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
                }`}
              >
                {index === 0 && (
                  <svg
                    className="mr-2.5 h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                  </svg>
                )}
                {item.label}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" suppressHydrationWarning>
        {JSON.stringify(jsonLdSchema)}
      </script>
    </>
  );
};

export default Breadcrumb;
