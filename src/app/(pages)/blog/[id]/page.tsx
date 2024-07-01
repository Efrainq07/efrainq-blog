import Markdown from "@/components/Markdown"
import Content from "@/components/Content"

export async function generateStaticParams() {
    return [{ id: '1' }]
}


export default function Post({ params }: { params: { id: string } }) {
    
    return (
        <Content content_id={params.id}/>
    )
}
