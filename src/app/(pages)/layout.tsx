"use client"
import Link from "next/link";
import { EB_Garamond } from "next/font/google";
import "@/css/globals.css";
import "@/css/prism.css";
import RandomGeometryScene from "@/components/RandomGeometryScene";
import {ReactTyped} from "react-typed";

const garamond = EB_Garamond({ subsets: ["latin"] });

var navigation_options = [
  {
    title: "About me",
    link: "/about"
  },
  {
    title: "Blog",
    link: "/blog"
  },
  {
    title: "Contact",
    link: "/contact"
  }
]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={garamond.className}>
        <div className="flex min-h-screen overflow-hidden max-md:px-0 flex-row max-md:flex-col-reverse max-md:justify-end px-10">
          <div className="md:w-3/4 pl-20 py-10 max-md:px-3">
          {children}
          </div>
          <div className="flex flex-col max-h-screen py-5 md:w-1/4">
            <div className="flex flex-col max-md:flex-row justify-between pr-2">
              <Link href={"/"} className="max-md:text-3xl font-semibold text-4xl lg:text-5xl mb-8 pl-5 md:min-h-36" key={"home"}><ReactTyped typeSpeed={50} strings={["Efrain<br/>Quintero"]}/></Link>
              <div className="text-xl flex flex-col max-md:flex-row text-2xl max-md:space-x-3 lg:text-3xl md:space-y-5 lg:space-y-10 text-blue-500 text-nowrap font-bold pl-10 max-md:pl-0">
                { navigation_options.map(
                  ({title, link}) => (
                    <Link href={link} className="hover:text-2xl lg:hover:text-4xl transition-all w-full" key={title}>{title}</Link>
                ))}
              </div>
            </div>
            <div className="max-md:hidden">
              <RandomGeometryScene/>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
