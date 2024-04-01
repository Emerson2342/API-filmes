import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView, Modal } from 'react-native';
import { styles } from './HomeStyles';
import { MovieType } from '../../interfaces';
import { API_IMAGE, API_LAST_MOVIES_OF_YEAR, API_LAST_TVSHOW_OF_YEAR } from '../../Constants/api';
import { MovieDetails } from '../../Components/Modals/MovieDetails';
import { TvShowDetails } from '../../Components/Modals/TvShowDetails';
import { WaveBotton, WaveTop } from '../../Components/CustomLines/Wave';
import MovieImage from '../../../assets/movie.png'

export function Home({ navigation }: any) {

    const [popularMovies, setPopularMovies] = useState<MovieType[] | []>([]);
    const [popularTvShows, setPopularTvShows] = useState<MovieType[] | []>([]);

    const [modalMovieVisible, setModalMovieVisible] = useState(false);
    const [idMovie, setIdMovie] = useState(0);
    const [yearMovie, setYearMovie] = useState('');
    const [movie, setMovie] = useState(!false);

    const [modalTvShowVisible, setModalTvShowVisible] = useState(false);
    const [idTvShow, setIdTvShow] = useState(0);
    const [yearTvShow, setYearTvShow] = useState('');

    const getTopPopularMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
    }

    const getTopPopularTvShows = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setPopularTvShows(data.results);
    }

    useEffect(() => {
        const topRatedUrl = API_LAST_MOVIES_OF_YEAR;
        const topRatedTvShowUrl = API_LAST_TVSHOW_OF_YEAR;
        getTopPopularMovies(topRatedUrl)
        getTopPopularTvShows(topRatedTvShowUrl);

    }, [])



    return (
        <View style={styles.container}>
            <View
                style={styles.content}
            >
                <StatusBar
                    translucent={true}
                    backgroundColor={'transparent'}
                />
                <View
                    style={{ top: -30 }}
                ><WaveTop /></View>

                {/*    {movie ? <View
                >
                    <Image
                        style={{
                            zIndex: 1,
                            flex: 1,
                            position: 'absolute',
                            width: 400,
                            height: 400
                        }}
                        source={MovieImage}
                    />
                </View> : <></>} */}


                <Text
                    style={{ textAlign: "center", fontSize: 30, fontWeight: 'bold' }}
                >Bem Vindo</Text>


                <View>
                    <Text
                        style={styles.subtitulo}
                    >Filmes em destaques</Text>
                    <ScrollView
                        horizontal

                    >

                        {popularMovies.map(movie => {

                            const releaseDate = movie.release_date || "Data indisponível";
                            const year = releaseDate.split("-")[0];

                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setIdMovie(movie.id)
                                        setYearMovie(year)
                                        setModalMovieVisible(true)
                                        setMovie(true);
                                    }}
                                    style={{ width: 100 }}
                                    key={movie.id}>
                                    <Image

                                        style={styles.imagePoster}
                                        source={{ uri: API_IMAGE + movie.poster_path }}
                                    />
                                    <Text
                                        style={styles.titleMovie}
                                    >{movie.title}</Text>
                                </TouchableOpacity>
                            )

                        })}

                    </ScrollView>
                </View>

                <View
                    style={{ paddingTop: 50 }}
                >
                    <Text
                        style={styles.subtitulo}
                    >Séries em destaques</Text>
                    <ScrollView
                        horizontal
                    >

                        {popularTvShows.map(tvShow => {

                            const releaseDate = tvShow.release_date || "Data indisponível";
                            const year = releaseDate.split("-")[0];

                            return (
                                <TouchableOpacity
                                    onPress={() => {
                                        setIdTvShow(tvShow.id)
                                        setYearTvShow(year)
                                        setModalTvShowVisible(true)
                                    }}
                                    style={{ width: 100 }}
                                    key={tvShow.id}>
                                    <Image

                                        style={styles.imagePoster}
                                        source={{ uri: API_IMAGE + tvShow.poster_path }}
                                    />
                                    <Text
                                        style={styles.titleMovie}
                                    >{tvShow.name}</Text>
                                </TouchableOpacity>
                            )

                        })}

                    </ScrollView>

                </View>
                <WaveBotton />
                <View
                    style={styles.buttonContainer}
                >

                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("movies")}
                    >
                        <Text
                            style={styles.textButton}
                        >Filmes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("tvshows")}
                    >
                        <Text
                            style={styles.textButton}
                        >Séries</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    transparent={true}
                    visible={modalMovieVisible}
                >
                    <MovieDetails
                        handleClose={() => setModalMovieVisible(false)}
                        id={idMovie}
                        year={yearMovie}

                    />
                </Modal>
                <Modal
                    transparent={true}
                    visible={modalTvShowVisible}
                >
                    <TvShowDetails
                        handleClose={() => setModalTvShowVisible(false)}
                        id={idTvShow}
                        year={yearTvShow}

                    />
                </Modal>

            </View>

        </View>
    );
}