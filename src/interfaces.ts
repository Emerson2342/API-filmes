export interface MovieType {
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    budget: number;
    runtime: number;
    genres: { name: string }[];
    revenue: number;
    tagline: string;
    original_name: string;
    first_air_date: string;
    episode_run_time: number;
    number_of_seasons: number;
    number_of_episodes: number;
    status: string;
    name: string;
    last_air_date: any;
    assistido: boolean;
}

export interface MovieCreditsType {
    cast:{
        name:string
    }[];
    crew:{
        name:string;
       job:string
    }[]
}
