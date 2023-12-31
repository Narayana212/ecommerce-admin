import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SNX",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated } = getKindeServerSession();
  const isLogin=await isAuthenticated()

  return (
    <html lang="en">
      <body className={`${inter.className} scroll-smooth`}>
        <NextTopLoader color="#2663e7" />
        <Navbar isLogin={isLogin} />
        {children}
      </body>
    </html>
  );
}
