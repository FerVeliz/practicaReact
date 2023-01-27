const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export const getRandomFact = async () => {
    const res = fetch(CAT_ENDPOINT_RANDOM_FACT)
    const data = await (await res).json()
    const { fact } = data
    return fact
}

