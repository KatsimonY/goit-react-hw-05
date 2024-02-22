import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const options = {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDEzN2JiNTYxNDY3NjI5ODljMjBmNDNmZThjOTdjYiIsInN1YiI6IjY1ZDVkMWFjZWVhMzRkMDE2MzZjM2IwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ABQjwYFnyq_1laZjAnL6X_PT6LkKFTxplShuk74oa74",
      },
};

export const getTrending = async () => {
    const response = await axios.get('/trending/movie/day', options);
    return response.data.results;
}

export const getMovieById = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}`, options);
    return response.data;
}

export const getCast = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/credits`, options);
    return response.data.cast;
}

export const getReviews = async (movieId) => {
    const response = await axios.get(`/movie/${movieId}/reviews`, options);
    return response.data.results;
}

export const getFilteredMovies = async (filter) => {
    const response = await axios.get(`/search/movie?query=${filter}`, options);
    return response.data.results;
}