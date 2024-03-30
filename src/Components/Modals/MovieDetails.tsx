import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { API_DATABASE, API_IMAGE, API_KEY } from "../../Constants/api";

export function MovieDetails({ handleClose, id, year }: any) {

    const [movie, setMovie] = useState(null);

    const getMovie = async (url: any) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    }

    useEffect(() => {
        const movieURL = `${API_DATABASE}${id}?${API_KEY}&language=pt-BR`
        getMovie(movieURL)
        console.log(movieURL)

    }, [])




    return (
        <View style={styles.container}>
            <View
                style={styles.modal}
            >
                <Text>{movie?.title} ({movie?.original_title})</Text>
                <Text>{movie?.release_date}</Text>
                <Text>{year}</Text>
                <Image
                    style={styles.imagePoster}
                    src={API_IMAGE + movie?.poster_path}
                />
                <Text>{movie?.overview}</Text>
                <View
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity
                        onPress={handleClose}
                    >
                        <Text>Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
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
        backgroundColor: "#fff",
        width: "90%",
        //maxHeight: "90%",
        padding: 5,
        borderRadius: 9
    },
    buttonContainer: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    imagePoster: {
        width: "50%",
        height: "60%",
        borderRadius: 5,
        alignSelf: "center",
        resizeMode: 'contain',

    },
})