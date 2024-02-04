const baseUrl = 'https://swapi.dev/api/'  
//!not ending with ,com different from lecture

export async function getAllStarships() {
  const res = await fetch(`${baseUrl}/starships`)
  return res.json()
}