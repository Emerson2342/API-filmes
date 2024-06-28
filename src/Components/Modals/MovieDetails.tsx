import React, { useState, useEffect } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { API_IMAGE, API_KEY, API_MOVIE_CREDIT, API_SEARCH_MOVIE_ID } from "../../Constants/api";
import { MovieCreditsType, MovieType } from "../../interfaces";
import { MotiView } from "moti";
import LottieView from "lottie-react-native";
import { ScrollView } from "react-native-gesture-handler";
import { useListaContext } from "../../Hooks/ListProvider";
import { StatusBar } from "expo-status-bar";

export function MovieDetails({ handleClose, id, year }: any) {

    const [movie, setMovie] = useState<MovieType | null>(null);
    const [movieCredits, setMovieCredits] = useState<MovieCreditsType | null>(null);
    const [director, setDirector] =useState<string[]>([])
    const [actors, setActors] = useState<string[]|null>([])
    

    const { listaFilme, setListaFilme } = useListaContext();

    const getMovie = async (url: any) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);

        
    }

    const getMovieCredits = async(url:any)=>{
        const res = await fetch(url);
        const data: MovieCreditsType = await res.json();
        setMovieCredits(data);
        
        const director = data.crew.filter(cast => cast.job == "Director").map(diretor => diretor.name);  
        setDirector(director);
              
        

        const actors = data.cast.slice(0,3).map(actor => actor.name);
        setActors(actors);
        
    }

    useEffect(() => {
        const movieURL = `${API_SEARCH_MOVIE_ID}${id}?${API_KEY}&language=pt-BR`
        getMovie(movieURL)
        console.log(movieURL)

        const movieCreditURL = API_MOVIE_CREDIT(id);
        getMovieCredits(movieCreditURL);

        
        console.log(movieCreditURL);          
        }, [])

    const addFilme = (filme: MovieType) => {

        const filmeExistente = listaFilme.find(item => item.id === filme.id);
        if (!filmeExistente) {
            filme.assistido = false;
            setListaFilme([...listaFilme, filme])
            Alert.alert(
                "",
                "Filme salvo na lista!",
                [
                    {
                        text: "Fechar",
                    },
                ]
            );
        } else Alert.alert(
            "",
            "Filme já está na lista!",
            [
                {
                    text: "Fechar",

                },
            ]
        );
    }

    const formattedBudget = movie?.budget.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });
    const formattedRevenue = movie?.revenue.toLocaleString('pt-BR', { style: 'currency', currency: 'USD' });

    return (
        <ScrollView style={styles.container}>
            <StatusBar
            backgroundColor={"rgba(0,0,0,0.7)"}
            />

            {movie ? (<MotiView
                from={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ type: 'timing', duration: 700 }}
                style={styles.modal}
            >
                <Text
                    style={styles.title}
                >{movie?.title} </Text>
                <Text style={{ textAlign: 'center' }}>({movie?.original_title}, {year})</Text>
                <View style={{justifyContent: 'center',flexDirection:'row'}}>
                <Text style={{fontWeight:'bold'}}>Direção:</Text><Text>{director && director.map((name, index) =>(
                    <Text key={index}>{index > 0 ? ', ': ''} {name}</Text>
                ))}</Text></View>
                <View
                    style={{ padding: 10 }}
                ><View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:"bold"}}>Orçamento:</Text><Text> {formattedBudget}</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:"bold"}}>Receita:</Text><Text> {formattedRevenue}</Text></View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:"bold"}}>Duração:</Text><Text> {movie?.runtime} min</Text></View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={{fontWeight:"bold"}}>Gêneros:</Text><Text> {movie && movie.genres.map((genre, index) => (
                        <Text key={index}>{index > 0 ? ', ' : ''}{genre.name}</Text>
                    ))}</Text></View>
                    <View style={{flexDirection:'row', width:'90%'}}>

                    <Text style={{fontWeight:"bold"}}>Elenco:</Text><Text>{actors && actors.map((name, index) =>(
                        <Text key={index}>{index > 0 ? ', ': ''} {name}</Text>
                     ))}
                     </Text></View>
                </View>

                <Image
                    style={styles.imagePoster}
                    src={API_IMAGE + movie?.poster_path}
                />
                {movie?.tagline ? (<Text
                    style={{ textAlign: "center", padding: 10, fontStyle: 'italic' }}
                >"{movie?.tagline}"</Text>) : <></>}

                <Text
                    style={{ textAlign: 'justify', padding: 10 }}
                >{movie?.overview}</Text>
                <View
                    style={styles.buttonContainer}
                >
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => {
                            addFilme(movie)
                        }}
                    >
                        <Text
                            style={styles.textButton}
                        >Salvar na Lista</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={handleClose}
                    >
                        <Text
                            style={styles.textButton}
                        >Fechar</Text>
                    </TouchableOpacity>

                </View>
            </MotiView>) : <View

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
        height: 600,
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
        alignItems: "center"
    },
    imagePoster: {
        width: 130,
        height: 200,
        borderRadius: 10,
        alignSelf: "center",
    },
    button: {
        marginVertical: 3,
        padding: 3,
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