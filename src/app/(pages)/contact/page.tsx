import { Metadata } from "next"
import Link from "next/link"
import { SocialIcon } from "react-social-icons"

export const metadata: Metadata = {
    title: "Efrain Quintero's Contact Info",
    description: "Articles and stories by Efrain Quintero"
}
  

export default function About() {
    return (
        <main className="flex w-full overflow-hidden flex-col px-8 items-center">
            <h1 className="font-semibold text-4xl lg:text-5xl mb-8 lg:pb-3">
                Contact
            </h1>
            <div className="flex flex-col text-3xl space-y-5">
                <Link className="hover:text-blue-500" href="https://twitter.com/nanquiedo"><SocialIcon url="https://twitter.com" as="div"/>  @nanquiedo</Link>
                <Link className="hover:text-blue-500" href="https://instagram.com/nanquiedo"><SocialIcon url="https://instagram.com" as="div"/>  @nanquiedo</Link>
                <Link className="hover:text-blue-500" href="https://github.com/Efrainq07"><SocialIcon url="https://github.com" as="div"/>  Efrainq07</Link>
                <Link className="hover:text-blue-500" href="mailto:efrainq07@gmail.com"><SocialIcon url="mailto:efrainq07@gmail.com" as="div"/>  efrainq07@gmail.com</Link>
            </div>
        </main>
    )
}
