import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Providers from "./providers";

export const metadata: Metadata = {
  title: "IMDb Clone",
  description: "IMDb Clone website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
