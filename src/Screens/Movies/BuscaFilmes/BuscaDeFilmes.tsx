import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MovieCard } from '../../../Components/MovieCard/MovieCard';
import { API_KEY, API_SEARCH_MOVIE } from '../../../Constants/api';
import { MovieType } from '../../../interfaces';
import LottieView from 'lottie-react-native';



export function BuscaDeFilmes({ navigation, route }: { navigation: any, route: any }) {
    const { busca } = route.params;


    const [movies, setMovies] = useState<MovieType[]>([]);
    const getSearchedMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        const searchWithURL = `${API_SEARCH_MOVIE}?${API_KEY}&query=${busca}&language=pt-BR`;
        console.log(searchWithURL)

        getSearchedMovies(searchWithURL)

    }, [])

    return (
        <View style={styles.container}>

            <View
                style={{ flexDirection: 'row', justifyContent: 'center' }}
            >
                <Text
                    style={styles.text}
                >Resultados para: </Text>
                <Text
                    style={[styles.text, { color: "#f7d354" }]}
                >{busca}</Text>
            </View>
            <View
                style={{ height: 650 }}
            >
                {movies.length === 0 && <LottieView
                    autoPlay
                    loop
                    style={styles.lottieView}
                    source={require('./../../../Components/ButtonAnimated/loading.json')}
                />}
                {movies.length > 0 && movies && <MovieCard key={movies[0].id} movie={movies} />}
            </View>

            <TouchableOpacity
                onPress={() => navigation.navigate("movies")}
                style={styles.buttonContent}
            >
                <Text
                    style={styles.textButton}
                >Voltar</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flex: 1,
        alignItems: 'center',
        backgroundColor: "rgba(0,150,150,0.5)",
        padding: 5,
    },
    text: {
        color: "#fff",
        fontSize: 25,
    },

    buttonContent: {
        marginTop: 15,
        borderWidth: 1,
        backgroundColor: "#fff",
        width: '50%',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        fontWeight: '500',
    },
    lottieView: {
        width: 200,
        height: 200,
    },
})