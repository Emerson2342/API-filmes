import React, { useState } from 'react';
import { View, Image, Text, FlatList, Modal } from 'react-native';
import { AntDesign } from 'react-native-vector-icons'

import { styles } from './MovieCardStyles';
import { API_IMAGE } from '../../Constants/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MovieDetails } from '../Modals/MovieDetails';

export function MovieCard({ movie }: any) {

    const [modalVisible, setModalVisible] = useState(false);
    const [idMovie, setIdMovie] = useState(0);
    const [year, setYear] = useState(0);

    const renderItem = ({ item }: any) => {
        const releaseDate = item.release_date || "Data indisponível";
        const year = releaseDate.split("-")[0];


        return (
            <View style={styles.container} >
                <View style={styles.list}>
                    <Image
                        style={styles.imagePoster}
                        src={API_IMAGE + item.poster_path}
                    />
                    <View
                        style={{ width: '98%' }}
                    >
                        <Text
                            style={styles.textTitle}
                        >{item.title}</Text>
                        <Text
                            style={{
                                color: "#fff",
                                textAlign: 'center',
                                width: "70%"
                            }}
                        > Ano: {year}</Text>
                        <View
                            style={styles.movieAverage}
                        >
                            <AntDesign name='star' color='#f7d354' />
                            <Text
                                style={{ color: "#fff" }}
                            >{item.vote_average}</Text>

                        </View>

                    </View>
                </View>
                <View
                    style={{ width: '80%', padding: 5 }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(true);
                            setIdMovie(item.id);
                            setYear(year);

                        }}
                        style={styles.button}
                    >
                        <Text
                        >Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    return (
        <View >
            <FlatList
                style={{ maxHeight: 600 }}
                data={movie}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />

            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <MovieDetails
                    handleClose={() => setModalVisible(false)}
                    id={idMovie}
                    year={year}
                />
            </Modal>
        </View>
    );
}