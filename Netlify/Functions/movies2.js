import fetch from "node-fetch";

export async function handler() {
  // ensure API key is provided on Netlify
  const key = process.env.TMDB_KEY;
  if (!key) {
    console.error("TMDB_KEY environment variable is missing");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server misconfigured: missing TMDB_KEY" }),
    };
  }

  try {
    // Call TMDB API from Netlify server (outside India)
    const res = await fetch(
      `https://api.themoviedb.org/3/trending/movie/day`
    );

    const data = await res.json();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.log(error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Failed to fetch TMDB data" }),
    };
  }
}