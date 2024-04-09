import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './MoviesStyles';
import { API_DATABASE } from '../../Constants/api';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { FontAwesome5 } from 'react-native-vector-icons';
import { MovieType } from '../../interfaces';
import { WaveBottomMovies, WaveTop } from '../../Components/CustomLines/Wave';
import { MotiView } from 'moti';
import LottieView from 'lottie-react-native';
import * as Animatable from 'react-native-animatable';


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
        { nome: 'Musical', id: 10402 },
        { nome: 'Romance', id: 10749 },
        { nome: 'Ficção Científica', id: 878 },
        { nome: 'Suspense', id: 53 },
        { nome: 'Terror', id: 27 },
        { nome: 'Thriller', id: 53 },
        { nome: 'Western', id: 37 }
    ];

    const getTopRatedMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = API_DATABASE;
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
            <Animatable.View
                animation={'slideInDown'}
                duration={3000}
            ><WaveTop />
            </Animatable.View>

            <View
                style={{ width: "100%" }}
            >
                <View
                    style={styles.inputContainer}
                >
                    <MotiView
                        style={{ width: "80%" }}
                        from={{ translateX: -200, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{ type: 'timing', duration: 2000 }}
                    >
                        <TextInput
                            style={styles.input}
                            value={search}
                            placeholder='Digite um filme'
                            onChangeText={(filme) => setSearch(filme)}
                            onSubmitEditing={handleSubmit}
                        />
                    </MotiView>
                    <MotiView
                        style={{ width: "90%" }}
                        from={{ translateX: 200, opacity: 0 }}
                        animate={{ translateX: 0, opacity: 1 }}
                        transition={{ type: 'timing', duration: 2000 }}
                    >
                        <TouchableOpacity
                            onPress={handleSubmit}
                            style={styles.searchContainer}>
                            <FontAwesome5 name='search' size={20} />
                        </TouchableOpacity>
                    </MotiView>
                </View>
            </View>
            <MotiView
                from={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 2000 }}
            >
                <Text
                    style={styles.textTitle}
                > Filmes</Text>
            </MotiView>
            <MotiView
                from={{ translateX: -200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 2000 }}
            >
                <Text style={{ fontStyle: 'italic', textAlign: 'center', }}>Melhores avaliados</Text>
            </MotiView>
            <View
                style={{ height: 380 }}
            >
                {topMovies.length === 0 && <LottieView
                    autoPlay
                    loop
                    speed={0.5}
                    style={styles.lottieView}
                    source={require('./../../Components/ButtonAnimated/loading.json')}
                />}

                {topMovies.length > 0 && topMovies && <MovieCard key={topMovies[0].id} movie={topMovies} />}
            </View>
            <MotiView
                from={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 2000 }}
            >
                <Text style={{ fontStyle: 'italic', textAlign: 'center', padding: 10 }}>Busque por categoria</Text>
            </MotiView>
            <View
                style={styles.generosContainer} >
                {generos.map((genero, index) => (
                    <Animatable.View
                        key={index}
                        style={styles.generoButton}
                        animation={'flipInX'}
                        duration={4000}
                    >
                        <TouchableOpacity
                            onPressIn={() => {
                                setSearchGenre((prevSearch) => {
                                    return { nome: genero.nome, id: genero.id };
                                });
                            }}
                            onPressOut={() => handleSearchGenre()}
                        >
                            <Text
                            >{genero.nome}</Text>
                        </TouchableOpacity>
                    </Animatable.View>
                ))}
            </View>
            <Animatable.View
                style={styles.buttonWrapper}
                animation={'fadeIn'}
                duration={5000}
                delay={500}
            >
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("home")}
                >
                    <Text

                        style={styles.textButton}
                    >Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => navigation.navigate("listaFilmes")}
                >
                    <Text

                        style={styles.textButton}
                    >Filmes Salvos</Text>
                </TouchableOpacity>
            </Animatable.View>
        </View >
    );
}