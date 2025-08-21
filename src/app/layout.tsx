import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import { ThemeProvider } from "next-themes";

export const metadata: Metadata = {
  title: {
    template: "%s | IMDb Clone",
    default: "IMDb Clone",
  },
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
        <ThemeProvider attribute="class" enableSystem={true}>
          <div className="text-gray-700 transition-colors duration-300 min-h-screen select-none">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
