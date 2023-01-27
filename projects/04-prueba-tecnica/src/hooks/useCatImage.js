import { useEffect, useState } from "react"

export const useCatImage = ({ fact }) => {
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        console.log(fact)
        if(!fact) return
        const firstThreeWord = fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstThreeWord}?size=50&color=red&json=true`)
            .then(res => res.json())
            .then(response => {
                const { url } = response
                setImageUrl(url)
            })
    },[fact])

    return { imageUrl }
}