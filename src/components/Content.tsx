"use client"
import Markdown from "@/components/Markdown"
import { useEffect, useState } from "react"



export default function Content({content_id } : {content_id : string}) {
    const [content, setContent] = useState("")
    useEffect(
        ()=>{
            fetch(`/content/${content_id}/content.md`)
            .then(
                (response) => response.text()
            )
            .then(
                setContent
            )

            fetch(`/content/${content_id}/metadata.json`)
            .then(
                (response) => response.json()
            )
            .then(
                (element)=>{
                    document.title = element.title
                }
            )
        },
        [])
    
    return (
        <article className="max-w-full prose lg:prose-xl prose-headings:semibold prose-a:text-blue-500"> 
            <Markdown content={content}/>
        </article>
    )
}
