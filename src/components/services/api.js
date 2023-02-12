import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',

  params: {
    api_key: '5bbf892bcd99762773ec3ce2eced7cd4',
  },
});

export const getAllMovies = async (page = 1) => {
  const { data } = await instance.get('/trending/all/day?', {
    params: {
      page,
    },
  });
  return data.results;
};

export const getMovieDetals = async movie_id => {
  const { data } = await instance.get(`/movie/${movie_id}?`);

  return data;
};

export const searchMovies = async search => {
  const { data } = await instance.get(
    `/{search}/movie?&language=en-US&page=1&include_adult=false`
  );

  return data;
};

// api key: 5bbf892bcd99762773ec3ce2eced7cd4

//https://api.themoviedb.org/3/movie/550?api_key=5bbf892bcd99762773ec3ce2eced7cd4
