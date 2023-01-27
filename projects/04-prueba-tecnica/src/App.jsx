import './App.css'
import { useCatImage } from "./hooks/useCatImage"
import { useCatFact } from "./hooks/useCatFact"
import { useEffect } from 'react'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'


export const App = () => {
    const { fact, refreshFact } = useCatFact()    
    const { imageUrl } = useCatImage({ fact })

    const handleClick = async () => refreshFact()


    return (
        <main>
            <h1>App de gatitos </h1>

            <button onClick={handleClick}>Cambialo!</button>

            <section>
                {fact && <p>{fact}</p>}
                {imageUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`} alt={`Imagen extraida usando las tres primeras palabras de ${fact}`}/>}
            </section>
        </main>
            
    )
}