
import { Montserrat } from "next/font/google";
import { Suspense } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import "./globals.css";
import Loading from "./loading";

const inter = Montserrat({ weight: ["100", "300", "400", "700", "500", "900"], fallback: ["inter"], subsets: ["cyrillic"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <main className="flex-grow">
          <Suspense fallback={<Loading />}>
            {children}
          </Suspense>
        </main>
        <Footer />
      </body>
    </html>
  );
}
