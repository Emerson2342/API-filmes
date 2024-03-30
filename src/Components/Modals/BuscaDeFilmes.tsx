import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { MovieCard } from '../MovieCard/MovieCard';
import { API_DATABASE, API_KEY, API_SEARCH } from '../../Constants/api';



export function ModalBuscaDeFilmes({ handleClose, search }: { handleClose: () => void, search: string }) {

    const [movies, setMovies] = useState([]);


    const getSearchedMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
    }

    useEffect(() => {
        const searchWithURL = `${API_SEARCH}?${API_KEY}&query=${search}`;
        console.log(searchWithURL)

        getSearchedMovies(searchWithURL)

    }, [])


    return (
        <View style={styles.container}>
            <View
                style={styles.modal}
            >
                <View
                    style={{ flexDirection: 'row', justifyContent: 'center' }}
                >
                    <Text
                        style={styles.text}
                    >Resultados para: </Text>
                    <Text
                        style={[styles.text, { color: "#f7d354" }]}
                    >{search}</Text>
                </View>
                {movies.length === 0 && <Text
                    style={styles.text}
                >Carregando...</Text>}
                <View
                    style={styles.buttonContainer}
                >
                    <MovieCard key={movies.id} movie={movies} />
                    <TouchableOpacity
                        onPress={() => handleClose()}
                        style={styles.buttonContent}
                    >
                        <Text
                            style={styles.textButton}
                        >Fechar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.8)"
    },
    modal: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#000",
        width: '90%',
        height: 700,
        borderRadius: 5,
        padding: 5,
        borderColor: "#fff",
        borderWidth: 1
    },
    text: {
        color: "#fff",
        fontSize: 20,
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    buttonContent: {
        marginTop: 15,
        backgroundColor: "#f7d354",
        width: '50%',
        padding: 5,
        borderRadius: 5,
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        fontWeight: '500',

    }
})