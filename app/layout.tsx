import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata = {
  title: "GiftDrive Rentals",
  description: "Where every ride is a gift, and every journey is a celebration",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
