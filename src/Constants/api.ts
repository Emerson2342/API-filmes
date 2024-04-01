const currentYear = new Date().getFullYear();

export const API_KEY = "api_key=90801878b983e4e59cc59fd85006941c";

export const API_DATABASE = `https://api.themoviedb.org/3/movie/top_rated?${API_KEY}&language=pt-BR`;

export const API_SEARCH_MOVIE_ID = `https://api.themoviedb.org/3/movie/`

export const API_TVSHOW = "https://api.themoviedb.org/3/tv/";

export const API_SEARCH_MOVIE = "https://api.themoviedb.org/3/search/movie";

export const API_SEARCH_TVSHOW = "https://api.themoviedb.org/3/search/tv";

export const API_IMAGE = "https://image.tmdb.org/t/p/w500/";

export const API_LAST_MOVIES_OF_YEAR = `https://api.themoviedb.org/3/discover/movie?${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&primary_release_year=${currentYear}`;

export const API_LAST_TVSHOW_OF_YEAR = `https://api.themoviedb.org/3/discover/tv?${API_KEY}&language=pt-BR&sort_by=vote_average.desc&include_adult=false&include_video=false&first_air_date_year=${currentYear}&vote_count.gte=100`;

export const API_POPULAR_TVSHOWS = `https://api.themoviedb.org/3/tv/top_rated?${API_KEY}&language=pt-BR&sort_by=popularity.desc`;