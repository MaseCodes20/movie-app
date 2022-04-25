export default async function trailer(req, res) {
  const {
    query: { id },
  } = req;

  const baseUrl = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${process.env.TMDB_KEY}&language=en-US`;

  const request = await fetch(baseUrl);
  const response = await request.json().then((movies) => movies.results);

  res.status(200).json({
    data: response,
  });
}
