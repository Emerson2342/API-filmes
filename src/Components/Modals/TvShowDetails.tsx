import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { API_DATABASE, API_IMAGE, API_KEY, API_TVSHOW } from "../../Constants/api";
import { MovieType, } from "../../interfaces";
import { MotiView } from "moti";
import LottieView from "lottie-react-native";

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
        <View style={styles.container}>

            {tvShow ? (<MotiView
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
                <Text
                    style={{ textAlign: "center", padding: 10, fontStyle: 'italic' }}
                >"{tvShow?.tagline}"</Text>

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
            </MotiView>) : <LottieView
                autoPlay
                loop
                style={styles.lottieView}
                source={require('./../../Components/ButtonAnimated/loading.json')}
            />}
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "rgba(0,0,0,0.7)"
    },
    modal: {
        backgroundColor: "rgb(0, 150, 150)",
        width: "90%",
        height: 'auto',
        padding: 5,
        borderRadius: 9,
        borderWidth: 1,
        borderColor: "#fff"
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: "center"
    },
    buttonContainer: {
        justifyContent: "flex-end",
        alignItems: "center"
    },
    imagePoster: {
        width: 130,
        height: 200,
        borderRadius: 10,
        alignSelf: "center",
    },
    button: {
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
        position: 'absolute',
        width: 200,
        height: 200,
    },
})