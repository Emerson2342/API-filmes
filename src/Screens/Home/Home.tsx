import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView, Modal } from 'react-native';
import { styles } from './HomeStyles';
import { MovieType } from '../../interfaces';
import { API_IMAGE, API_LAST_MOVIES_OF_YEAR, API_LAST_TVSHOW_OF_YEAR } from '../../Constants/api';
import { MovieDetails } from '../../Components/Modals/MovieDetails';
import { TvShowDetails } from '../../Components/Modals/TvShowDetails';
import { WaveTop } from '../../Components/CustomLines/Wave';
import { MotiView } from 'moti';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';

export function Home({ navigation }: any) {

    const [popularMovies, setPopularMovies] = useState<MovieType[] | []>([]);
    const [popularTvShows, setPopularTvShows] = useState<MovieType[] | []>([]);

    const [modalMovieVisible, setModalMovieVisible] = useState(false);
    const [idMovie, setIdMovie] = useState(0);
    const [yearMovie, setYearMovie] = useState('');

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
                    barStyle={'dark-content'}
                />

                <Animatable.View
                    animation={'slideInDown'}
                    duration={3000}

                ><WaveTop />
                </Animatable.View>

                <MotiView
                    from={{ translateY: -200, opacity: 0 }}
                    animate={{ translateY: 0, opacity: 1 }}
                    transition={{ type: 'timing', duration: 2500 }}
                >
                    <Text
                        style={{ textAlign: "center", fontSize: 30, fontWeight: 'bold' }}
                    >Bem Vindo</Text>
                </MotiView>

                <View>
                    <MotiView
                        from={{ translateX: 300, opacity: 0 }}
                        animate={{ translateX: -90, opacity: 1 }}
                        transition={{ type: 'timing', duration: 2500 }}
                    >
                        <Text
                            style={styles.subtitulo}
                        >Filmes em destaques</Text>
                    </MotiView>
                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >
                        {popularMovies.map(movie => {
                            const releaseDate = movie.release_date || "Data indisponível";
                            const year = releaseDate.split("-")[0];

                            return (
                                <Animatable.View
                                    key={movie.id}
                                    style={{ width: 150, marginLeft: 5 }}
                                    animation={'flipInY'}
                                    duration={3000}
                                    delay={1000}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIdMovie(movie.id)
                                            setYearMovie(year)
                                            setModalMovieVisible(true)
                                        }}

                                    >
                                        <Image

                                            style={styles.imagePoster}
                                            source={{ uri: API_IMAGE + movie.poster_path }}
                                        />

                                        <Text
                                            style={styles.titleMovie}
                                        >{movie.title}</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        })}
                    </ScrollView>
                </View>

                <View>
                    <MotiView
                        from={{ translateX: -300, opacity: 0 }}
                        animate={{ translateX: 90, opacity: 1 }}
                        transition={{ type: 'timing', duration: 2500 }}
                    >
                        <Text
                            style={styles.subtitulo}
                        >Séries em destaques</Text>
                    </MotiView>


                    <ScrollView
                        horizontal
                        showsHorizontalScrollIndicator={false}
                    >

                        {popularTvShows.map(tvShow => {

                            const releaseDate = tvShow.first_air_date || "Data indisponível";
                            const year = releaseDate.split("-")[0];

                            return (

                                <Animatable.View
                                    key={tvShow.id}
                                    style={{ width: 150, marginLeft: 5 }}
                                    animation={'flipInY'}
                                    duration={3000}
                                    delay={1000}
                                >
                                    <TouchableOpacity
                                        onPress={() => {
                                            setIdTvShow(tvShow.id)
                                            setYearTvShow(year)
                                            setModalTvShowVisible(true)
                                        }}
                                    >
                                        <Image

                                            style={styles.imagePoster}
                                            source={{ uri: API_IMAGE + tvShow.poster_path }}
                                        />
                                        <Text
                                            style={styles.titleMovie}
                                        >{tvShow.name}</Text>
                                    </TouchableOpacity>
                                </Animatable.View>
                            )
                        })}
                    </ScrollView>
                </View>

                <Animatable.View
                    style={styles.buttonWrapper}
                    animation={'bounceIn'}
                    duration={5000}
                    delay={500}
                ><TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("movies")}
                ><Text
                    style={styles.textButton}
                >Filmes</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => navigation.navigate("tvshows")}
                    ><Text
                        style={styles.textButton}
                    >Séries</Text>
                    </TouchableOpacity>

                </Animatable.View>
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

        </View >
    );
}