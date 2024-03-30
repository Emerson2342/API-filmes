import React from 'react';
import { View, Image, Text, FlatList, } from 'react-native';
import { AntDesign } from 'react-native-vector-icons'

import { styles } from './MovieCardStyles';
import { API_IMAGE } from '../../Constants/api';
import { TouchableOpacity } from 'react-native-gesture-handler';




export function MovieCard({ movie, showLink = true }: any) {

    const renderItem = ({ item }: any) => {
        return (
            <View style={styles.container} >
                <Image
                    style={styles.imagePoster}
                    src={API_IMAGE + item.poster_path}
                />
                <View

                    style={{ width: '100%' }}
                >
                    <Text
                        style={styles.textTitle}
                    >{item.title}</Text>
                    <View
                        style={styles.movieAverage}
                    >
                        <AntDesign name='star' color='#f7d354' />
                        <Text
                            style={{ color: "#fff" }}
                        >{item.vote_average}</Text>
                    </View>
                    <View
                        style={styles.detalhesButton}
                    >
                        <TouchableOpacity
                            onPress={() => alert('sdfadsf')}
                            style={styles.button}
                        // {showLink && <Link to={`/movies/${item.id}`} >Detalhes</Link>}
                        >
                            <Text
                                style={styles.detalhesText}
                            >Detalhes</Text>
                        </TouchableOpacity>
                    </View>
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


        </View>
    );
}