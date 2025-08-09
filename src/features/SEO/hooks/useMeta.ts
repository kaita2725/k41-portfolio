import { useEffect } from 'react'
import { setDocumentMeta } from '../../../utils/meta'

export function useMeta(meta: {
    title?: string,
    description?: string,
    keywords?: string,
}) {
    useEffect(() => {
        setDocumentMeta(meta)
    }, [meta.title, meta.description, meta.keywords])
}