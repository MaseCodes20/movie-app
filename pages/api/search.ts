export default async function search(req, res) {
  const {
    query: { searchTerm },
  } = req;

  const baseUrl = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.TMDB_KEY}&language=en-US&query=${searchTerm}&include_adult=false`;
  const request = await fetch(baseUrl);
  const response = await request.json().then((movies) => movies.results);

  res.status(200).json({
    data: response,
  });
}
