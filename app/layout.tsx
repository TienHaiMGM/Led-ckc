import "./globals.css";
import "./font.css";
import { StrictMode } from "react";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <style>
          {`
            .favicon-text {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              background-color: #ee3337;
              color: white;
              font-family: Arial, sans-serif;
              font-weight: bold;
              font-size: 20px;
              border-radius: 50%;
            }
          `}
        </style>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'><circle cx='16' cy='16' r='16' fill='%23ee3337'/><text x='16' y='22' fill='white' font-family='Arial' font-size='20' font-weight='bold' text-anchor='middle'>S</text></svg>"
          type="image/svg+xml"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#4f46e5" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="format-detection" content="address=no" />
      </head>
      <body className={`antialiased`}>
        <StrictMode>
          <div className="flex min-h-screen flex-col">{children}</div>
        </StrictMode>
      </body>
    </html>
  );
}
