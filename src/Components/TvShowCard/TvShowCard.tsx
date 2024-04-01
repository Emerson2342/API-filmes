import React, { useState } from 'react';
import { View, Image, Text, FlatList, Modal } from 'react-native';
import { AntDesign } from 'react-native-vector-icons'

import { styles } from './TvShowCardStyles';
import { API_IMAGE } from '../../Constants/api';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { TvShowDetails } from '../Modals/TvShowDetails';

export function TvShowCard({ tvShow }: any) {

    const [modalVisible, setModalVisible] = useState(false);
    const [idTvShow, setIdTvShow] = useState(0);
    const [year, setYear] = useState(0);

    const renderItem = ({ item }: any) => {

        const relaseTvShow = item.first_air_date || "Indisponível";
        const yearTvShow = relaseTvShow.split("-")[0];



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
                        >{item.name}</Text>
                        <Text
                            style={{
                                color: "#000",
                                textAlign: 'center',
                                width: "70%"
                            }}
                        > Ano: {yearTvShow}</Text>
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
                            setIdTvShow(item.id);
                            setYear(yearTvShow);

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
        <View
        >
            <FlatList
                data={tvShow}
                numColumns={2}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />

            <Modal
                transparent={true}
                visible={modalVisible}
            >
                <TvShowDetails
                    handleClose={() => setModalVisible(false)}
                    id={idTvShow}
                    year={year}
                />
            </Modal>
        </View>
    );
}