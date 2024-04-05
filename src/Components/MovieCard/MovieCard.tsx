import React, { useState } from 'react';
import { View, Image, Text, FlatList, Modal } from 'react-native';
import { AntDesign } from 'react-native-vector-icons'

import { styles } from './MovieCardStyles';
import { API_IMAGE } from '../../Constants/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MovieDetails } from '../Modals/MovieDetails';
import { MotiView } from 'moti';

export function MovieCard({ movie }: any) {

    const [modalVisible, setModalVisible] = useState(false);
    const [idMovie, setIdMovie] = useState(0);
    const [yearMovie, setYearMovie] = useState(0);

    const renderItem = ({ item, index }: any) => {

        const relaseMovie = item.release_date;
        const yearMovie = relaseMovie.split("-")[0];

        const translateX = index % 2 === 0 ? -200 : 200;

        return (
            <MotiView
                from={{ translateX: translateX, opacity: 0 }}
                animate={{ translateX: 0, opacity: 1 }}
                transition={{ type: 'timing', duration: 2000 }}
                style={styles.container}
            >
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
                                color: "#000",
                                textAlign: 'center',
                                width: "70%"
                            }}
                        > Ano: {yearMovie}</Text>
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
                <View
                    style={{ width: '80%', padding: 5 }}
                >
                    <TouchableOpacity
                        onPress={() => {
                            setModalVisible(true);
                            setIdMovie(item.id);
                            setYearMovie(yearMovie);

                        }}
                        style={styles.button}
                    >
                        <Text
                        >Detalhes</Text>
                    </TouchableOpacity>
                </View>
            </MotiView>
        )
    }

    return (
        <View
        >
            <FlatList
                data={movie}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />
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