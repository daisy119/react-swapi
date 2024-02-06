const baseUrl = 'https://swapi.dev/api/'  


export async function getAllStarships() {
  try {
    const res = await fetch(`${baseUrl}/starships`)
    return res.json()
  } catch (error) {
    console.log(error)
  }
}