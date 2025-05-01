const API_KEY = "cd02af5bb0e46a8cc77c74ca8c5f3086";

export async function getTrendingMovies() {
  const URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`;
  try {
    const response = await fetch(URL);
    const data = await response.json();

    return data.results;
  } catch (error) {
    console.error("Failed to fetch trending movies:", error);
    return [];
  }
}

export async function searchMovies(query) {
  const url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Failed to search movies:", error);
    return [];
  }
}