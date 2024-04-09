import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StatusBar, FlatList, Alert, Modal } from 'react-native';
import { useListaContext } from '../../Hooks/ListProvider';
import { AntDesign, Feather, FontAwesome } from 'react-native-vector-icons'

import { styles } from './ListaSeriesStyles';
import { API_IMAGE } from '../../Constants/api';
import { MovieDetails } from '../../Components/Modals/MovieDetails';
import { TvShowDetails } from '../../Components/Modals/TvShowDetails';

export function ListaSeries({ navigation }: any) {

    const { listaSerie, setListaSerie } = useListaContext();
    const colum = 2
    const [modalVisible, setModalVisible] = useState(false)

    const [idMovie, setIdMovie] = useState(0);
    const [yearMovie, setYearMovie] = useState(0);

    const confirmar = (index: number) => {
        Alert.alert(
            "Atenção",
            "Deseja remover a série da lista?",
            [
                {
                    text: "Cancelar",
                    onPress: () => console.log("Cancelado"),
                    style: "cancel"
                },
                {
                    text: "Sim",
                    onPress: () => removerSerie(index)
                }
            ]
        );
    };

    const handleAssistir = (index: number) => {
        const novaListaSerie = [...listaSerie];
        novaListaSerie[index].assistido = !novaListaSerie[index].assistido;
        setListaSerie(novaListaSerie);
    };


    const removerSerie = (index: number) => {
        const novaListaSerie = listaSerie.filter((serie, i) => i !== index);
        setListaSerie(novaListaSerie);
    }


    const renderItem = ({ item, index }: any) => {
        const lastAirYear = item?.last_air_date || "Indisponível";
        const lastYearTvShow = lastAirYear.split("-")[0];

        const relaseTvShow = item.first_air_date || "Indisponível";
        const yearTvShow = relaseTvShow.split("-")[0];
        return (
            <View
                style={listaSerie.length == 1 ? [styles.list, { width: "90%" }] : styles.list}
            >
                <View style={styles.content}>
                    <View
                    >
                        <Image
                            style={styles.imagePoster}
                            src={API_IMAGE + item.poster_path}
                        />
                    </View>
                    <View>
                        <View
                            style={{ width: '80%', alignSelf: 'center' }}
                        >
                            <Text
                                style={styles.textTitle}
                            >{item.name}</Text>
                        </View>
                        <View
                            style={styles.subInfo}
                        >
                            <Text
                                style={{
                                    color: "#000",
                                }}
                            > Ano:{yearTvShow} - {lastYearTvShow}</Text>
                            <View
                                style={styles.tvShowAverage}
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
                            setYearMovie(yearTvShow);
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
            >Séries Salvas</Text>

            {listaSerie.length > 0 ?
                <View>
                    <FlatList
                        style={{ maxHeight: 700 }}
                        data={listaSerie}
                        numColumns={colum}
                        renderItem={renderItem}
                        keyExtractor={(item) => item.id.toString()}
                    />
                </View> : <Text
                    style={{ top: 150 }}
                >Nenhuma série salva</Text>
            }

            <View
                style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-end' }}>
                <TouchableOpacity
                    style={styles.buttonVoltar}
                    onPress={() => navigation.navigate('tvshows')}
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
                <TvShowDetails
                    handleClose={() => setModalVisible(false)}
                    id={idMovie}
                    year={yearMovie}
                />
            </Modal>
        </View>
    );
}