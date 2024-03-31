import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './MoviesStyles';
import { API_DATABASE, API_KEY } from '../../Constants/api';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { FontAwesome5 } from 'react-native-vector-icons';
import { MovieType } from '../../interfaces';


export function Movies({ navigation }: any) {

    const [topMovies, setTopMovies] = useState<MovieType[] | []>([])
    const [search, setSearch] = useState('');

    const getTopRatedMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${API_DATABASE}top_rated?${API_KEY}&language=pt-BR`;
        getTopRatedMovies(topRatedUrl)

    }, [])

    const handleSubmit = () => {
        if (search) {
            navigation.navigate("buscaFilmes", { busca: search })
            console.log('Filme digitado:', search);
            setSearch('')
        } else (
            alert("Favor Digitar um filme")
        )
    };

    return (
        <View style={styles.container}>
            <View
                style={{ width: "100%" }}
            >
                <View
                    style={styles.inputContainer}
                >
                    <TextInput
                        style={styles.input}
                        value={search}
                        placeholder='Digite um filme'
                        onChangeText={(filme) => setSearch(filme)}
                        onSubmitEditing={handleSubmit}
                    />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.searchContainer}>
                        <FontAwesome5 name='search' size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text
                style={styles.textTitle}
            >Melhores Filmes</Text>


            {topMovies.length === 0 && <Text>Carregando...</Text>}

            {topMovies.length > 0 && topMovies && <MovieCard key={topMovies[0].id} movie={topMovies} />}



            <View
                style={styles.buttonContainer}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("home")}
                >
                    <Text
                        style={styles.textButton}
                    >Home</Text>
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

        </View>
    );
}