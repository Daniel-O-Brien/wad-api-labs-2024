export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=f52d856f35331a99f37b9995f813f671&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };