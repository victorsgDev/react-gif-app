export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=U4ZLyeV1SCR1ufs3P5ehUY7oAXDY4RV8&q=${category}&limit=5`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));

    return gifs;
}