import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, Modal, KeyboardAvoidingView } from 'react-native';

import { styles } from './MoviesStyles';
import { TabBar } from '../../Components/TabBar/TabBar';
import { useFocusEffect } from '@react-navigation/native';
import { API_DATABASE, API_KEY } from '../../Constants/api';
import { MovieCard } from '../../Components/MovieCard/MovieCard';
import { FontAwesome5 } from 'react-native-vector-icons'
import { ModalBuscaDeFilmes } from '../../Components/Modals/BuscaDeFilmes';


export function Movies({ navigation }: any) {

    const [onFocus, setOnFocus] = useState(false);
    const [topMovies, setTopMovies] = useState([]);
    const [search, setSearch] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setOnFocus(true);
            return () => {
                setOnFocus(false);
            };
        }, [])
    );

    const getTopRatedMovies = async (url: any) => {

        const response = await fetch(url);
        const data = await response.json();
        setTopMovies(data.results);
    }

    useEffect(() => {
        const topRatedUrl = `${API_DATABASE}top_rated?${API_KEY}`;
        getTopRatedMovies(topRatedUrl)

    }, [])


    const handleSubmit = () => {
        if (search) {
            (setModalVisible(true))
            console.log('Filme digitado:', search);
        } else (
            alert("Favor Digitar um filme")
        )


    };

    return (
        <View style={styles.container}>
            <View
                style={{ width: "100%" }}
            >

                <View
                    style={styles.inputContainer}
                >
                    <TextInput
                        style={styles.input}
                        value={search}
                        placeholder='Digite um filme'
                        onChangeText={(filme) => setSearch(filme)}
                        onSubmitEditing={handleSubmit}
                    />
                    <TouchableOpacity
                        onPress={handleSubmit}
                        style={styles.searchContainer}>
                        <FontAwesome5 name='search' size={20} />
                    </TouchableOpacity>
                </View>
            </View>
            <Text
                style={styles.textTitle}
            >Melhores Filmes</Text>
            {topMovies.length === 0 && <Text>Carregando...</Text>}
            <MovieCard key={topMovies.id} movie={topMovies} />
            <TabBar navigation={navigation} focusMovies={onFocus} />

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType='fade'
            >
                <ModalBuscaDeFilmes
                    handleClose={() => {
                        setSearch('');
                        setModalVisible(false)
                    }}
                    search={search}
                />
            </Modal>
        </View>
    );
}