import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, FlatList, Alert, Modal } from 'react-native';
import { useListaContext } from '../../Hooks/ListProvider';
import { AntDesign, Feather, FontAwesome } from 'react-native-vector-icons'

import { styles } from './ListaFilmesStyles';
import { API_IMAGE } from '../../Constants/api';
import { MovieDetails } from '../../Components/Modals/MovieDetails';

export function ListaFilmes({ navigation }: any) {

    const { listaFilme, setListaFilme, listaSerie, setListaSerie } = useListaContext();
    const colum = 2
    const [modalVisible, setModalVisible] = useState(false)

    const [idMovie, setIdMovie] = useState(0);
    const [yearMovie, setYearMovie] = useState(0);

    const confirmar = (index: number) => {
        Alert.alert(
            "Atenção",
            "Deseja remover o filme da lista?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => removerFilme(index)
                }
            ]
        );
    };

    const handleAssistir = (index: number) => {
        const novaListaFilme = [...listaFilme];
        novaListaFilme[index].assistido = !novaListaFilme[index].assistido;
        setListaFilme(novaListaFilme);
    };


    const removerFilme = (index: number) => {
        const novaListaFilme = listaFilme.filter((filme, i) => i !== index);
        setListaFilme(novaListaFilme);
    }


    const renderItem = ({ item, index }: any) => {
        const relaseMovie = item.release_date;
        const yearMovie = relaseMovie.split("-")[0];
        return (
            <View
                style={listaFilme.length == 1 ? [styles.list, { width: "90%" }] : styles.list}
            >
                <View style={styles.content}>
                    <View
                    >
                        <Image
                            style={styles.imagePoster}
                            src={API_IMAGE + item.poster_path}
                        />
                    </View>
                    <View
                        style={{ width: '90%', }}
                    >
                        <View
                            style={{ width: '70%', }}
                        >
                            <Text
                                style={styles.textTitle}
                            >{item.title}</Text>
                        </View>
                        <View
                            style={styles.subInfo}
                        >
                            <Text
                                style={{
                                    color: "#000", textAlign: 'center'
                                }}
                            > Ano:{yearMovie}</Text>
                            <View
                                style={styles.movieAverage}
                            >
                                <AntDesign name='star' color='#f7d354' />
                                <Text
                                    style={{ color: "#000" }}
                                >{item.vote_average}</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <View
                    style={styles.buttons}
                >
                    <View
                        style={styles.optionsContainer}
                    ><TouchableOpacity
                        style={[styles.button, { backgroundColor: "#00C8BE" }]}
                        onPress={() => {
                            setModalVisible(true);
                            setYearMovie(yearMovie);
                            setIdMovie(item.id)
                        }}
                    >
                            <Text style={styles.buttonText}>Detalhes</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={item.assistido ? [styles.button, { backgroundColor: "#99ccff" }] : [styles.button, { backgroundColor: "#ccffcc" }]}
                            onPress={() => handleAssistir(index)}
                        ><Feather
                                name={item.assistido ? 'check-square' : 'square'}
                                size={20}
                            />
                            <Text style={styles.buttonText}>{item.assistido ? 'Assistido' : 'Assistir'}</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => confirmar(index)}
                        >
                            <FontAwesome
                                name='remove'
                                size={20}
                            />
                            <Text style={styles.buttonText}>Remover</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor={'transparent'}
            />
            <Text
                style={{ fontSize: 30, fontStyle: 'italic', fontWeight: 'bold' }}
            >Filmes Salvos</Text>

            {listaFilme.length > 0 ?
                <View>
                    <FlatList
                        style={{ maxHeight: 700 }}
                        data={listaFilme}
                        numColumns={colum}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View> : <Text
                    style={{ top: 150 }}
                >Nenhum filme salvo</Text>
            }

            <View
                style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    style={styles.buttonVoltar}
                    onPress={() => navigation.navigate('movies')}
                >
                    <Text
                        style={styles.textVoltar}
                    >Voltar</Text>
                </TouchableOpacity>
            </View>
            <Modal
                transparent={true}
                visible={modalVisible}
                animationType='fade'
            >
                <MovieDetails
                    handleClose={() => setModalVisible(false)}
                    id={idMovie}
                    year={yearMovie}
                />
            </Modal>
        </View>
    );
}