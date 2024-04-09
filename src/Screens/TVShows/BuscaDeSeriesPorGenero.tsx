import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, StatusBar } from 'react-native';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { API_SEARCH_TVSHOW_GENRE_ID } from '../../Constants/api';
import { MovieType } from '../../interfaces';
import LottieView from 'lottie-react-native';
import { TvShowCard } from '../../Components/TvShowCard/TvShowCard';


export function BuscaDeSeriesPorGenero({ navigation, route }: { navigation: any, route: any }) {
    const { nome, busca } = route.params;

    const [shows, setTvShows] = useState<MovieType[]>([]);
    const getSearchedSeries = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setTvShows(data.results);
    }

    useEffect(() => {
        const searchWithURL = `${API_SEARCH_TVSHOW_GENRE_ID}${busca}`;
        console.log(searchWithURL)
        getSearchedSeries(searchWithURL)

    }, [])

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'#00C8BE'} />
            <View
                style={{ flexDirection: 'row', justifyContent: 'center' }}
            >
                <Text
                    style={styles.text}
                >{nome}</Text>
            </View>
            {shows.length == 0 && <LottieView
                autoPlay
                loop
                style={[styles.lottieView, { top: 150 }]}
                source={require('./../../Components/ButtonAnimated/loading.json')}
            />}
            <View
                style={{ height: 680 }}
            >
                {shows.length > 0 && shows && <TvShowCard
                    key={shows[0].id} tvShow={shows} />}
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
                    onPress={() => navigation.navigate("tvshows")}
                    style={styles.textButton}
                >Voltar</Text>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 30,
        flex: 1,
        alignItems: 'center',
        padding: 5,
        backgroundColor: "#00C8BE",
    },
    text: {
        color: "#000",
        fontSize: 25,
        fontWeight: "bold"
    },

    textButton: {
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        top: 87
    },
    buttonWrapper: {
        zIndex: -5,
        top: -50,
        width: "50%",
        alignSelf: 'center'
    },
    lottieView: {
        position: 'absolute',
        width: 200,
        height: 200,
    },
})