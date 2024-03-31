const currentYear = new Date().getFullYear();

export const API_KEY = "api_key=90801878b983e4e59cc59fd85006941c"

export const API_DATABASE = "https://api.themoviedb.org/3/movie/"

export const API_SEARCH = "https://api.themoviedb.org/3/search/movie"

export const API_IMAGE = "https://image.tmdb.org/t/p/w500/"

export const API_LAST_MOVIES_OF_YEAR = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=${currentYear}`;