import "./globals.css";
import { inter } from "./fonts";
import Script from "next/script";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html className="scroll-smooth" lang="en">
      <body className={`${inter.className} `}>
        {children}
        <Script src="https://kit.fontawesome.com/d924478ec2.js"></Script>
      </body>
    </html>
  );
}
