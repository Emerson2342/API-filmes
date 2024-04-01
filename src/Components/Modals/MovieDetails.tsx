import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { API_DATABASE, API_IMAGE, API_KEY, API_SEARCH_MOVIE_ID } from "../../Constants/api";
import { MovieType } from "../../interfaces";

export function MovieDetails({ handleClose, id, year }: any) {

    const [movie, setMovie] = useState<MovieType | null>(null);

    const getMovie = async (url: any) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    }

    useEffect(() => {
        const movieURL = `${API_SEARCH_MOVIE_ID}${id}?${API_KEY}&language=pt-BR`
        getMovie(movieURL)
        console.log(movieURL)
        console.log(JSON.stringify(movie, null, 2))

    }, [])


    const formattedBudget = movie?.budget.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
    const formattedRevenue = movie?.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });

    return (
        <View style={styles.container}>
            <View
                style={styles.modal}
            >
                <Text
                    style={styles.title}
                >{movie?.title} </Text>
                <Text style={{ textAlign: 'center' }}>({movie?.original_title}, {year})</Text>
                <View
                    style={{ padding: 10 }}
                >
                    <Text>Orçamento: {formattedBudget}</Text>
                    <Text>Receita: {formattedRevenue}</Text>

                    <Text>Duração: {movie?.runtime} min</Text>
                    <Text>Gêneros: {movie && movie.genres.map((genre, index) => (
                        <Text key={index}>{index > 0 ? ', ' : ''}{genre.name}</Text>
                    ))}</Text>
                </View>


                <Image
                    style={styles.imagePoster}
                    src={API_IMAGE + movie?.poster_path}
                />
                <Text
                    style={{ textAlign: "center", padding: 10, fontStyle: 'italic' }}
                >"{movie?.tagline}"</Text>

                <Text
                    style={{ textAlign: 'justify', padding: 10 }}
                >{movie?.overview}</Text>
                <View
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleClose}
                    >
                        <Text
                            style={styles.textButton}
                        >Fechar</Text>
                    </TouchableOpacity>
                </View>

            </View>


        </View >

    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    modal: {
        backgroundColor: "rgb(0, 150, 150)",
        width: "90%",
        height: 'auto',
        padding: 5,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#fff"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttonContainer: {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    imagePoster: {
        width: 130,
        height: 200,
        borderRadius: 10,
        alignSelf: "center",
    },
    button: {
        margin: 20,
        padding: 5,
        backgroundColor: "#fff",
        width: '60%',
        borderRadius: 5,
        borderWidth: 1
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    }
})