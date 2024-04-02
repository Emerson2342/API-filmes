import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import { styles } from './TVShowsStyles';
import { API_POPULAR_TVSHOWS } from '../../Constants/api';
import { FontAwesome5 } from 'react-native-vector-icons';
import { MovieType } from '../../interfaces';
import { TvShowCard } from '../../Components/TvShowCard/TvShowCard';
import { WaveBottomMovies, WaveTop } from '../../Components/CustomLines/Wave';
import { MotiView } from 'moti';

export function TVShows({ navigation }: any) {


    const [topTvShows, setTopTvShows] = useState<MovieType[]>([])
    const [search, setSearch] = useState('');

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
                        placeholder='Digite uma série'
                        onChangeText={(serie) => setSearch(serie)}
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
            >Melhores Séries de TV</Text>
            <MotiView
                style={{ top: 200, height: 520, position: "absolute" }}
                from={{ translateY: 200, opacity: 0 }}
                animate={{ translateY: 0, opacity: 1 }}
                transition={{ type: 'spring', duration: 5500 }}
            >
                {topTvShows.length === 0 && <Text>Carregando...</Text>}

                {topTvShows.length > 0 && topTvShows && <TvShowCard key={topTvShows[0].id} tvShow={topTvShows} />}
            </MotiView>
            <View
                style={{ flex: 1, justifyContent: "flex-end", }}
            >
                <WaveBottomMovies
                />

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
                        onPress={() => navigation.navigate("movies")}
                    >
                        <Text
                            style={styles.textButton}
                        >Filmes</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
}