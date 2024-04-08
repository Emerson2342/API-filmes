import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './TVShowsStyles';
import { API_POPULAR_TVSHOWS } from '../../Constants/api';
import { FontAwesome5 } from 'react-native-vector-icons';
import { MovieType } from '../../interfaces';
import { TvShowCard } from '../../Components/TvShowCard/TvShowCard';
import { WaveBottomMovies, WaveTop } from '../../Components/CustomLines/Wave';
import { MotiView } from 'moti';
import LottieView from 'lottie-react-native';

export function TVShows({ navigation }: any) {

    const [topTvShows, setTopTvShows] = useState<MovieType[]>([])
    const [search, setSearch] = useState('');
    const [searchGenre, setSearchGenre] = useState({ nome: '', id: 0 });
    const generos = [
        { nome: 'Ação e Aventura', id: 10759 },
        { nome: 'Animação', id: 16 },
        { nome: 'Comédia', id: 35 },
        { nome: 'Crime', id: 80 },
        { nome: 'Documentário', id: 99 },
        { nome: 'Drama', id: 18 },
        { nome: 'Família', id: 10751 },
        { nome: 'Fantasia', id: 14 },
        { nome: 'Guerra e Política', id: 10768 },
        { nome: 'Infantil', id: 10762 },
        { nome: 'Horror', id: 27 },
        { nome: 'Mistério', id: 9648 },
        { nome: 'Notícias', id: 10763 },
        { nome: 'Reality Show', id: 10764 },
        { nome: 'Romance', id: 10749 },
        { nome: 'Ficção Científica', id: 10765 },
        { nome: 'Talk Show', id: 10767 },
    ];

    const getTopRatedTvShows = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setTopTvShows(data.results);
    }

    useEffect(() => {
        const topRatedUrl = API_POPULAR_TVSHOWS;
        getTopRatedTvShows(topRatedUrl)
    }, [])

    const handleSubmit = () => {
        if (search) {
            navigation.navigate("buscaSeries", { busca: search })
            console.log('Série digitada:', search);
            setSearch('')
        } else (
            alert("Favor Digitar uma série!")
        )
    };

    const handleSearchGenre = () => {
        if (searchGenre) {
            navigation.navigate("buscaSeriesPorGenero", { busca: searchGenre.id, nome: searchGenre.nome })
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
                    style={{ top: -50 }}
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
                            placeholder='Digite uma série'
                            onChangeText={(serie) => setSearch(serie)}
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
                >Séries</Text>
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
                {topTvShows.length === 0 && <LottieView
                    autoPlay
                    loop
                    speed={0.5}
                    style={styles.lottieView}
                    source={require('./../../Components/ButtonAnimated/loading.json')}
                />}

                {topTvShows.length > 0 && topTvShows && <TvShowCard key={topTvShows[0].id} tvShow={topTvShows} />}
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
                    style={{ zIndex: -5, height: 90, backgroundColor: "#00C8BE" }}
                />
            </MotiView>
        </View>
    );
}