import type { Metadata } from "next";
import Navbar from "../components/navbar";
import { Poppins } from "next/font/google";

import "../css/global.css";

const poppins = Poppins({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

// Edit for your branding
export const metadata: Metadata = {
  title: "[Name] Value List",
  description: "The best value list!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <div>
          <Navbar />
        </div>
        <div>{children}</div>
      </body>
    </html>
  );
}
