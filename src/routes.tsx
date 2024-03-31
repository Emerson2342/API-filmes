import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Screens/Home/Home";
import { Movies } from "./Screens/Movies/Movies";
import { TVShows } from "./Screens/TVShows/TVShows";
import { BuscaDeFilmes } from "./Screens/Movies/BuscaFilmes/BuscaDeFilmes";
import { BuscaDeSeries } from "./Screens/TVShows/BuscaDeSeries";


const { Screen, Navigator } = createStackNavigator();

export function Routes() {

    return (
        <Navigator
        >
            <Screen
                name='home'
                component={Home}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Screen
                name='movies'
                component={Movies}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            <Screen
                name="buscaFilmes"
                component={BuscaDeFilmes}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

            <Screen
                name="tvshows"
                component={TVShows}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            <Screen
                name="buscaSeries"
                component={BuscaDeSeries}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

        </Navigator>
    )
} 