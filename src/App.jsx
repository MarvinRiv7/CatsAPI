import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
//const CAT_ENDPOINT_IMAGE_URL = `https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`

export function App () {

    const [fact, setFact] = useState()

    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res => res.json())
        .then(data => {
            const {fact} = data
            setFact(fact)

            const firstWord = fact.split(' ', 3)
            console.log(firstWord)

            fetch(`https://cataas.com/cat/says/${firstWord}?fontSize=50&fontColor=red&json=true`)
            .then(res => res.json())
            .then(response => {
                console.log(response)
            })
        })
    }, [])
    

    return(
        <main>
        <h1>App de gatitos</h1>
        {fact && <p>{fact}</p>}
        </main>
    )
}

//https://cataas.com/cat/says/hello
//edpoint https://cataas.com/cat/says/${}?fontSize=50&fontColor=red&json=true