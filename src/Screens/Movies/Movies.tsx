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

    const rotateXMatrix = (angle: any) => {
        const radianAngle = (angle * Math.PI) / 180;
        const cos = Math.cos(radianAngle);
        const sin = Math.sin(radianAngle);

        return [
            1, 0, 0, 0,
            0, cos, -sin, 0,
            0, sin, cos, 0,
            0, 0, 0, 1,
        ];
    };

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
            <MotiView
                from={{ translateY: -200, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 2000 }}
            >
                <View
                    style={{ top: - 100 }}
                ><WaveTop />
                </View>
            </MotiView >
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
                <Text style={{ fontStyle: 'italic', textAlign: 'center', top: 15 }}>Melhores avaliados</Text>
            </MotiView>
            <View
                style={{ height: 279, marginTop: 20 }}

            >
                {topMovies.length === 0 && <Text>Carregando...</Text>}

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

                    <MotiView

                        from={{ rotateX: '-90deg', opacity: 0 }}
                        animate={{ rotateX: '0deg', opacity: 1 }}
                        transition={{ type: 'timing', duration: 2000 }}
                        key={index}
                        style={styles.generoButton}
                    >
                        <TouchableOpacity

                            onPressIn={() => {
                                setSearchGenre((prevSearch) => {
                                    return { nome: genero.nome, id: genero.id };
                                });
                            }}
                            onPressOut={() => handleSearchGenre()}
                        >
                            <Text >{genero.nome}</Text>
                        </TouchableOpacity>
                    </MotiView>
                ))}
            </View>


            <MotiView
                style={styles.buttonWrapper}
                from={{ translateX: 200, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 2000 }}
            >

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

            </MotiView>


            <MotiView
                from={{ translateY: 200, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 2000 }}
            >
                <WaveBottomMovies />
                <View
                    style={{ top: 18, zIndex: -5, height: 90, backgroundColor: "#00C8BE" }}
                />
            </MotiView>



        </View >
    );
}