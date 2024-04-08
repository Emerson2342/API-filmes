import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { API_DATABASE, API_IMAGE, API_KEY, API_TVSHOW } from "../../Constants/api";
import { MovieType, } from "../../interfaces";
import { MotiView } from "moti";
import LottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";

export function TvShowDetails({ handleClose, id, year }: any) {

    const [tvShow, setTvShow] = useState<MovieType | null>(null);

    const getTvShow = async (url: any) => {
        const res = await fetch(url);
        const data = await res.json();

        setTvShow(data);
    }

    useEffect(() => {
        const tvShowURL = `${API_TVSHOW}${id}?${API_KEY}&language=pt-BR`
        getTvShow(tvShowURL)
        console.log(tvShowURL)

    }, [])

    const lastAirYear = tvShow?.last_air_date || "Indisponível";
    const lastYearTvShow = lastAirYear.split("-")[0];

    let statusTvShow;
    switch (tvShow?.status) {
        case "Returning Series":
            statusTvShow = "Série em andamento";
            break;
        case "Ended":
            statusTvShow = "Finalizada";
            break;
        case "In Production":
            statusTvShow = "Em produção";
            break;
        case "Canceled":
            statusTvShow = "Cancelada";
            break;
        default:
            statusTvShow = "Status Indisponível!";
            break;
    }

    return (
        <ScrollView style={styles.container}>
            {tvShow ? (
                <MotiView
                    from={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ type: 'timing', duration: 700 }}
                    style={styles.modal}
                >
                    <Text
                        style={styles.title}
                    >{tvShow?.name} </Text>
                    <Text style={{ textAlign: 'center' }}>({tvShow?.original_name}, {year}-{lastYearTvShow})</Text>
                    <View
                        style={{
                            padding: 10,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                justifyContent: "space-between"
                            }}
                        >
                            <View>
                                <Text>Temporadas: {tvShow?.number_of_seasons}</Text>
                                <Text>Episódios: {tvShow?.number_of_episodes}</Text>
                            </View>
                            <View style={{ alignItems: "flex-end" }}>
                                <Text>Duração: {tvShow?.episode_run_time} min</Text>
                                <Text>Status: {statusTvShow}</Text>
                            </View>
                        </View>
                        <Text>Gêneros: {tvShow && tvShow.genres.map((genre, index) => (
                            <Text key={index}>{index > 0 ? ', ' : ''}{genre.name}</Text>
                        ))}</Text>
                    </View>
                    <Image
                        style={styles.imagePoster}
                        src={API_IMAGE + tvShow?.poster_path}
                    />

                    {tvShow?.tagline ? (<Text
                        style={{ textAlign: "center", padding: 10, fontStyle: 'italic' }}
                    >"{tvShow?.tagline}"</Text>) : <></>}

                    <Text
                        style={{ textAlign: 'justify', padding: 10 }}
                    >{tvShow?.overview}</Text>

                    <Text
                        style={{ textAlign: 'justify', padding: 10 }}
                    >{tvShow?.overview}</Text>
                    <View
                        style={styles.buttonContainer}
                    >
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleClose}
                        >
                            <Text
                                style={styles.textButton}
                            >Fechar</Text>
                        </TouchableOpacity>
                    </View>
                </MotiView>

            ) : <View
                style={styles.loading}
            >
                <LottieView
                    autoPlay
                    loop
                    style={styles.lottieView}
                    source={require('./../../Components/ButtonAnimated/loading.json')}
                />
                <TouchableOpacity
                    style={[styles.button, { top: 200 }]}
                    onPress={handleClose}
                >
                    <Text
                        style={styles.textButton}
                    >Voltar</Text>
                </TouchableOpacity>
            </View>}
        </ScrollView >
    )
}

const styles = StyleSheet.create({
    container: {
        alignContent: 'center',
        backgroundColor: "rgba(0,0,0,0.7)",
        padding: 30,
        height: "100%"
    },
    modal: {
        flex: 1,
        backgroundColor: "rgb(0, 150, 150)",
        width: "100%",
        padding: 5,
        marginBottom: 50,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#fff"
    },
    loading: {
        height: 500,
        marginTop: 250,
        width: "80%",
        alignSelf: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttonContainer: {
        justifyContent: "flex-end",
        alignItems: "center",
    },
    imagePoster: {
        width: 130,
        height: 200,
        borderRadius: 10,
        alignSelf: "center",
    },
    button: {
        justifyContent: 'flex-end',
        margin: 20,
        padding: 5,
        backgroundColor: "#fff",
        width: '60%',
        borderRadius: 5,
        borderWidth: 1
    },
    textButton: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    lottieView: {
        width: 200,
        height: 200,
    },
})