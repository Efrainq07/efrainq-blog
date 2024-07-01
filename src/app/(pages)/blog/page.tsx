import { Metadata } from "next"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

export const metadata: Metadata = {
    title: "Efrain Quintero's Blog Posts",
    description: "Articles and stories by Efrain Quintero"
}
  

export default function About() {
    return (
        <main className="flex w-full overflow-hidden flex-col px-8 items-center">
            <h1 className="font-semibold text-4xl lg:text-5xl mb-8 lg:pb-3">
                Blog
            </h1>
            <div className="flex flex-col text-3xl space-y-5">
                <a href="blog/1" className="hover:underline hover:text-blue-300  text-blue-500 hover:cursor-pointer">Creating a (mostly) decentralized blog page with Lens Protocol</a>
            </div>
        </main>
    )
}
