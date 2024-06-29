import type { Metadata } from "next";
import { EB_Garamond } from "next/font/google";
import "../globals.css";

const garamond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Efrain Quintero",
  description: "Articles and stories by Efrain Quintero"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        {children}
      </body>
    </html>
  );
}
