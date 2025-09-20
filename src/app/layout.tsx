import Navbar from "../components/navbar";
import { Poppins } from "next/font/google";

import "../css/global.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

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
