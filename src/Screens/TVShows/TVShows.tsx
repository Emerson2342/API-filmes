import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './TVShowsStyles';
import { TabBar } from '../../Components/TabBar/TabBar';
import { useFocusEffect } from '@react-navigation/native';

export function TVShows({ navigation }: any) {

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
            <Text>TV shows Works</Text>
            <TabBar navigation={navigation} focusTvShows={onFocus} />
        </View>
    );
}