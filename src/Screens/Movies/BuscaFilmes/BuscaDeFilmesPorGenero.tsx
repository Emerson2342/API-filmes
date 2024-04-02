import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { MovieCard } from '../../../Components/MovieCard/MovieCard';
import { API_SEARCH_MOVIE_GENRE_ID } from '../../../Constants/api';
import { MovieType } from '../../../interfaces';
import { WaveBottomMovies, WaveBotton2, WaveTop3 } from '../../../Components/CustomLines/Wave';
import LottieView from 'lottie-react-native';


export function BuscaDeFilmesPorGenero({ navigation, route }: { navigation: any, route: any }) {
    const { nome, busca } = route.params;


    const [movies, setMovies] = useState<MovieType[]>([]);

    const getSearchedMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        const searchWithURL = `${API_SEARCH_MOVIE_GENRE_ID}+${busca}`;
        console.log(searchWithURL)

        getSearchedMovies(searchWithURL)

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'#00C8BE'} />
            <View
                style={{ flexDirection: 'row', justifyContent: 'center' }}
            >
                <Text
                    style={styles.text}
                >{nome}</Text>
            </View>
            {movies.length === 0 && <Text
                style={styles.text}
            >Carregando...</Text>}
            <View
                style={{ height: 680 }}
            >
                {movies.length > 0 && movies && <MovieCard
                    key={movies[0].id} movie={movies} />}
            </View>


            <View style={styles.buttonWrapper}>
                <LottieView
                    autoPlay
                    loop
                    speed={0.5}
                    style={styles.lottieView}
                    source={require('./../../../Components/ButtonAnimated/buttonWhite.json')}
                />
                <Text
                    onPress={() => navigation.navigate("movies")}
                    style={styles.textButton}
                >Voltar</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: "#00C8BE",
    },
    text: {
        color: "#000",
        fontSize: 25,
        fontWeight: "bold"
    },

    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        top: 87
    },
    buttonWrapper: {
        zIndex: -5,
        top: -50,
        width: "50%",
        alignSelf: 'center'
    },
    lottieView: {
        position: 'absolute',
        width: 200,
        height: 200,
    },
})