import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './MoviesStyles';
import { API_DATABASE, API_KEY } from '../../Constants/api';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { FontAwesome5 } from 'react-native-vector-icons';
import { MovieType } from '../../interfaces';
import { WaveBottomMovies, WaveTop } from '../../Components/CustomLines/Wave';
import { MotiView } from 'moti';
import LottieView from 'lottie-react-native';


export function Movies({ navigation }: any) {

    const [topMovies, setTopMovies] = useState<MovieType[] | []>([])
    const [search, setSearch] = useState('');
    const [searchGenre, setSearchGenre] = useState({ nome: '', id: 0 });
    const generos = [
        { nome: 'Ação', id: 28 },
        { nome: 'Aventura', id: 12 },
        { nome: 'Animação', id: 16 },
        { nome: 'Comédia', id: 35 },
        { nome: 'Crime', id: 80 },
        { nome: 'Documentário', id: 99 },
        { nome: 'Drama', id: 18 },
        { nome: 'Fantasia', id: 14 },
        { nome: 'Horror', id: 27 },
        { nome: 'Mistério', id: 9648 },
        { nome: 'Romance', id: 10749 },
        { nome: 'Ficção Científica', id: 878 },
        { nome: 'Suspense', id: 53 },
        { nome: 'Terror', id: 27 },
        { nome: 'Thriller', id: 53 }
    ];


    const getTopRatedMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${API_DATABASE}`;
        getTopRatedMovies(topRatedUrl)

    }, [])



    const handleSubmit = () => {
        if (search) {
            navigation.navigate("buscaFilmes", { busca: search })
            console.log('Buscar por:', search);
            setSearch('')
        } else (
            alert("Favor Digitar um filme")
        )
    };

    const handleSearchGenre = () => {
        if (searchGenre) {
            navigation.navigate("buscaFilmesPorGenero", { busca: searchGenre.id, nome: searchGenre.nome })
            console.log('Buscar por:', searchGenre.nome);
            setSearchGenre({ nome: '', id: 0 })
        }
        else {
            alert("Erro ao procurar filmes por gênero")
        }
    };

    return (
        <View style={styles.container}>
            <View
                style={{ top: -230, alignSelf: 'stretch' }}
            >
                <WaveTop />
            </View>
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
            > Filmes</Text>
            <Text style={{ fontStyle: 'italic' }}>Melhores avaliados</Text>

            <MotiView
                style={{ height: 279, marginTop: 20 }}
                from={{ translateY: 200, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 5500 }}
            >
                {topMovies.length === 0 && <Text>Carregando...</Text>}

                {topMovies.length > 0 && topMovies && <MovieCard key={topMovies[0].id} movie={topMovies} />}
            </MotiView>

            <Text style={{ fontStyle: 'italic', textAlign: 'center', padding: 10 }}>Busque por categoria</Text>
            <View
                style={styles.generosContainer}
            >
                {generos.map((genero, index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.generoButton}
                        onPressIn={() => {
                            setSearchGenre((prevSearch) => {
                                return { nome: genero.nome, id: genero.id };
                            });
                        }}
                        onPressOut={() => handleSearchGenre()}
                    >
                        <Text >{genero.nome}</Text>
                    </TouchableOpacity>
                ))}

            </View>
            <View style={styles.buttonWrapper}>
                <LottieView
                    autoPlay
                    loop
                    speed={0.5}
                    style={styles.lottieView}
                    source={require('./../../Components/ButtonAnimated/buttonWhite.json')}
                />
                <Text
                    onPress={() => navigation.navigate("home")}
                    style={styles.textButton}
                >Voltar</Text>
            </View>


            <MotiView
                from={{ translateY: 200, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 3000 }}
            >
                <WaveBottomMovies
                />
                <View
                    style={{ top: 18, zIndex: -5, height: 60, backgroundColor: "#00C8BE" }}
                />
            </MotiView>



        </View>
    );
}