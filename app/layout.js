import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/sidebar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dashboard",
  description: "Sidebar layout with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          {/* Sidebar always visible */}
          <Sidebar />

          {/* Right section: main + footer */}
          <div className="flex flex-col flex-1 bg-gray-50">
            {/* Main content */}
            <main className="flex-1 p-6 overflow-auto">{children}</main>

            <div className="bg-white p-4 text-center text-sm text-gray-500 sticky bottom-0">
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
