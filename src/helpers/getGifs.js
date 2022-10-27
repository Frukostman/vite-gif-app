export const getGifs = async(category) => {
    
    const numberLimit = 5
    const url = `https://api.giphy.com/v1/gifs/search?api_key=w8BsV2KtuX8z3ZUKgtZZsvs62rFMBnwW&q=${category}&limit=${numberLimit}&rating=r`
    
    const resp = await fetch(url)
    const {data} = await resp.json()
    
    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        urle: img.images.downsized_medium.url

    }))
        return gifs
}