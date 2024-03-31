import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image, ScrollView, Modal } from 'react-native';
import { styles } from './HomeStyles';
import { MovieType } from '../../interfaces';
import { API_IMAGE, API_LAST_MOVIES_OF_YEAR } from '../../Constants/api';
import { MovieDetails } from '../../Components/Modals/MovieDetails';

export function Home({ navigation }: any) {

    const [popularMovies, setPopularMovies] = useState<MovieType[] | []>([]);

    const [modalMovieVisible, setModalMovieVisible] = useState(false);
    const [idMovie, setIdMovie] = useState(0);
    const [yearMovie, setYearMovie] = useState('');

    const getTopPopularMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setPopularMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = API_LAST_MOVIES_OF_YEAR;
        getTopPopularMovies(topRatedUrl)

    }, [])



    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                translucent={false}
                backgroundColor={"rgba(0, 150, 150, 0.9)"}
            />
            <Text
                style={{ textAlign: "center", fontSize: 30, fontWeight: 'bold' }}
            >Bem Vindo</Text>
            <View>
                <Text
                    style={{ textAlign: 'center', padding: 10, }}
                >Filmes em destaques</Text>
                <ScrollView
                    horizontal
                    style={styles.postersMovies}
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
            <View>
                <Text
                    style={{ textAlign: 'center', padding: 10, }}
                >Séries em destaques</Text>

            </View>
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

        </View>
    );
}