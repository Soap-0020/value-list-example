import type { Metadata } from "next";
import Navbar from "../components/navbar";
import { Poppins } from "next/font/google";

import "../css/global.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

// Edit for your branding
export const metadata: Metadata = {
  title: "Spongebob Tower Defence Values",
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
        <div style={{ padding: "8px" }}>{children}</div>
      </body>
    </html>
  );
}
