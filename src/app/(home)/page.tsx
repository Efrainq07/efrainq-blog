"use client"
import Link from "next/link"
import RandomGeometryScene from "@/components/RandomGeometryScene";
import {ReactTyped} from "react-typed";

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


export default function Home() {
  return (
    <main className="flex h-screen w-full overflow-hidden flex-col justify-between p-10 px-8">
      <div className="flex flex-col space-y-10 md:flex-row">
        <div className="md:w-3/4 md:pl-20">
          <h1 className="font-semibold text-7xl lg:text-9xl mb-8 lg:pb-12">
            Efrain<br/>
            Quintero
          </h1>
          <p id="description" className="font-semibold text-2xl text-justify md:text-2xl sm:w-1/2 md:w-3/4 lg:w-1/2 lg:text-4xl text-neutral-500">
          <ReactTyped strings={[`
            Hi there, my name is Efrain and I am a software engineer and mathematician.
            <br/>
            <br/>
            In this page you'll find some blog entries I've written about pretty much anything I find interesting.
            `]}   stopped={false} startDelay={500} typeSpeed={30} backSpeed={100} onComplete={(self) => {self.cursor.remove()}}/>
          </p>
        </div>
        <div className="flex md:flex-col justify-between md:w-1/4">
          <div className="flex w-full flex-col text-3xl space-y-5 lg:text-5xl lg:space-y-10 text-blue-500 text-nowrap font-bold">
            { navigation_options.map(
              ({title, link}) => (
                <Link href={link} className="hover:text-4xl lg:hover:text-6xl transition-all" key={title}>{title}</Link>
            ))}
          </div>
          <RandomGeometryScene/>
        </div>
      </div>
    </main>
  );
}