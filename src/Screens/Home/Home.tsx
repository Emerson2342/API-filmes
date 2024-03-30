import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StatusBar, Image } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { styles } from './HomeStyles';
import { TabBar } from '../../Components/TabBar/TabBar';

export function Home({ navigation }: any) {

    const [onFocus, setOnFocus] = useState(false);

    useFocusEffect(
        React.useCallback(() => {
            setOnFocus(true);
            return () => {
                setOnFocus(false);
            };
        }, [])
    );

    return (
        <View style={styles.container}>
            <StatusBar
                hidden={false}
                backgroundColor={"#000"}
            />
            <Text>Bem Vindo</Text>
            <View>
                <Text>Filmes em destaques</Text>
                <Image
                    style={{ width: 100, height: 200, resizeMode: "contain" }}
                    src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'
                />
            </View>
            <View>
                <Text>Séries em destaques</Text>
                <Image
                    style={{ width: 100, height: 200, resizeMode: "contain" }}
                    src='https://image.tmdb.org/t/p/w500/1E5baAaEse26fej7uHcjOgEE2t2.jpg'
                />
            </View>
            <TouchableOpacity
                onPress={() => navigation.navigate("movies")}
            >
                <Text>Filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => navigation.navigate("tvshows")}
            >
                <Text>Séries</Text>
            </TouchableOpacity>

        </View>
    );
}