import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { styles } from './TVShowsStyles';
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

        </View>
    );
}