import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { TvShowCard } from '../../Components/TvShowCard/TvShowCard';
import { API_KEY, API_SEARCH_TVSHOW } from '../../Constants/api';
import { MovieType } from '../../interfaces';
import LottieView from 'lottie-react-native';


export function BuscaDeSeries({ navigation, route }: { navigation: any, route: any }) {
    const { busca } = route.params;


    const [tvShows, setTvShows] = useState<MovieType[]>([]);
    const getSearchedTvShows = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setTvShows(data.results);
    }

    useEffect(() => {
        const searchWithURL = `${API_SEARCH_TVSHOW}?${API_KEY}&query=${busca}&language=pt-BR`;
        console.log(searchWithURL)

        getSearchedTvShows(searchWithURL)

    }, [])

    return (
        <View style={styles.container}>
            <View
                style={{ flexDirection: 'row', justifyContent: 'center' }}
            >
                <Text
                    style={styles.text}
                >Resultados para: </Text>
                <Text
                    style={[styles.text, { color: "#f7d354" }]}
                >{busca}</Text>
            </View>
            <View
                style={{ height: 10 }}
            >
                {tvShows.length === 0 && <LottieView
                    autoPlay
                    loop
                    style={styles.lottieView}
                    source={require('./../../Components/ButtonAnimated/loading.json')}
                />}
            </View>

            <View
                style={{ height: 650 }}
            >
                {tvShows.length > 0 && tvShows && <TvShowCard key={tvShows[0].id} tvShow={tvShows} />}
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("tvshows")}
                style={styles.buttonContent}
            >
                <Text
                    style={styles.textButton}
                >Voltar</Text>
            </TouchableOpacity>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: 'center',
        backgroundColor: "rgba(0,150,150,0.5)",
        padding: 5,
    },
    text: {
        color: "#fff",
        fontSize: 25,
    },

    buttonContent: {
        marginTop: 15,
        backgroundColor: "#fff",
        width: '50%',
        padding: 5,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center'
    },
    textButton: {
        fontSize: 20,
        fontWeight: '500',
    },
    lottieView: {
        width: 200,
        height: 200
    }
})