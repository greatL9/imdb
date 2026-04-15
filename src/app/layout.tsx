import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Searchbox } from "@/components/Searchbox";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

export const metadata: Metadata = {
  title: {
    template: "%s | Moviq",
    default: "Moviq",
  },
  description: "Moviq website",
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
            <Navbar />
            <Searchbox />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
