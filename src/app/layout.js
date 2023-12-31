import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import { Container } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Elara Elegance",
  description: "Generated by Elara Elegance",
};

export default function RootLayout({ children }) {
  console.log(children);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <Container className="min-h-screen">{children}</Container>
        <Footer />
      </body>
    </html>
  );
}
