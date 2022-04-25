export default async function popular(req, res) {
  const {
    query: { page },
  } = req;

  const baseUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_KEY}&language=en-US&page=${page}`;

  const request = await fetch(baseUrl);
  const response = await request.json().then((movies) => movies.results);

  res.status(200).json({
    data: response,
  });
}
