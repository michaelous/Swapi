import 'regenerator-runtime/runtime'

export async function fetchData(url) {
    try {
        const res = await fetch(url)
        return await res.json();

    } catch (error) {
        console.error(`Wrong API call: ${error}`)
    }
}