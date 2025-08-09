interface DocumentMeta {
    title?:string,
    description?: string,
    keywords?:string
} 

export function setDocumentMeta({title, description, keywords}: DocumentMeta) {
    if(title) document.title = title
    if(description) updateMetaTag('description', description)
    if(keywords) updateMetaTag('keywords', keywords)
}

function updateMetaTag(name:string, content: string) {
    let tag = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement | null;
    if(tag) return tag.setAttribute ('content', content)

    tag = document.createElement('meta');
    tag.setAttribute('name', name);
    tag.setAttribute('content', content);
    document.head.appendChild(tag);
}