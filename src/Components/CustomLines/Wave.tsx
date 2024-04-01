import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Svg, { ClipPath, Defs, G, LinearGradient, Path, Stop } from "react-native-svg";

const { width, height } = Dimensions.get('window');

export function WaveTop() {
    return (
        <View
            style={{ position: 'absolute' }}
        >
            <Svg width={width} height={width} viewBox="0 0 365 340">
                <Defs>
                    <LinearGradient x1="0" y1="87.641%" x2="10.14%" y2="3.465%" id="prefix__a">
                        <Stop stopColor="#fff" offset="100%" />


                        <Stop stopColor="#00C8BE" offset="0%" />
                    </LinearGradient>
                </Defs>
                <Path
                    d="M.11-2H376c-.005 204.081-.005 306.134 0 306.158-95.114 82-135.593-8.28-188-16.789C98.06 266.778 51.482 346.402.11 262.41-.037 251.212-.037 163.075.11-2z"
                    fill="url(#prefix__a)"
                />
            </Svg>
        </View>

    );
}

export function WaveBotton() {
    return (
        <View
            style={{ height: 110 }}
        >
            <Svg

                width={width}
                height={150}
                viewBox="0 0 1440 320"
            >
                <Defs>

                </Defs>
                <Path
                    fill="#00C8BE"
                    d="M0,32L48,32C96,32,192,32,288,74.7C384,117,480,203,576,202.7C672,203,768,117,864,122.7C960,128,1056,224,1152,250.7C1248,277,1344,235,1392,213.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                />
            </Svg>
        </View>
    )
}

export function WaveBottomMovies() {
    return (
        <View style={{ height: 110 }}>
            <Svg

                width={width}
                height={150}
                viewBox="0 0 1440 320"
            >
                <Path fill="#00C8BE" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,213.3C480,181,600,107,720,85.3C840,64,960,96,1080,101.3C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
            </Svg>
        </View>
    )
}

