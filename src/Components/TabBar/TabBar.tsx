import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';

import { styles } from './TabBarStyles';

export function TabBar({ navigation, focusHome, focusMovies, focusTvShows }: any) {

    return (
        <View
            style={styles.tabBar}
        >
            <TouchableOpacity
                style={focusHome ? ({ backgroundColor: "#fafa" }) : { backgroundColor: "#fff" }}
                onPress={() => navigation.navigate("home")}
            >
                <Text>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={focusMovies ? ({ backgroundColor: "#fafa" }) : { backgroundColor: "#fff" }}
                onPress={() => navigation.navigate("movies")}
            >
                <Text>Filmes</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={focusTvShows ? ({ backgroundColor: "#fafa" }) : { backgroundColor: "#fff" }}
                onPress={() => navigation.navigate("tvshows")}
            >
                <Text>Séries</Text>
            </TouchableOpacity>
        </View>
    );
}