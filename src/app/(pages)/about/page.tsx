import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
    title: "About Efrain Quintero",
    description: "Articles and stories by Efrain Quintero"
  }
  
export default function About() {
    return (
        <main className="flex w-full overflow-hidden flex-col px-8 items-center">
            <h1 className="font-semibold text-4xl lg:text-5xl mb-8 lg:pb-3">
                About Me
            </h1>
            <img className="object-cover overflow-hidden rounded-full w-1/8 aspect-square object-top mb-10" alt="yo" src="/yo.jpeg" width={300} height={0}/>
            <p className="font-medium text-xl text-justify md:text-2xl md:w-3/4 lg:text-2xl text-neutral-500">
                I&apos;m currently on the Master&apos;s in Computer Science program at Tecnologico de Monterrey and I studied my bachelors in Mathematics at UNAM. I am interested in <b className="text-blue-500">Quantum Computing</b>, <b className="text-purple-500">Blockchain</b> and <b className="text-red-500">Artificial Intelligence</b>.
                <br/>
                <br/>    
                That sounds like a lot, but I just read too much I guess.
            <br/>
            <br/>
            You can check out my latest resume <Link className="text-blue-500 hover:underline" href={'/cv.pdf'}>here</Link>.
            </p>
        </main>
    )
}
