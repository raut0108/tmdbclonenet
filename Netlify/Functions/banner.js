import fetch from "node-fetch";

export async function handler() {
  try {
    // Call TMDB API from Netlify server (outside India)
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${process.env.TMDB_KEY}`
    );

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error.message)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch TMDB data" }),
    };
  }
}