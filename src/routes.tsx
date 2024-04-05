import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Screens/Home/Home";
import { Movies } from "./Screens/Movies/Movies";
import { TVShows } from "./Screens/TVShows/TVShows";
import { BuscaDeFilmes } from "./Screens/Movies/BuscaFilmes/BuscaDeFilmes";
import { BuscaDeSeries } from "./Screens/TVShows/BuscaDeSeries";
import { BuscaDeFilmesPorGenero } from "./Screens/Movies/BuscaFilmes/BuscaDeFilmesPorGenero";
import { BuscaDeSeriesPorGenero } from "./Screens/TVShows/BuscaDeSeriesPorGenero";


const { Screen, Navigator } = createStackNavigator();

export function Routes() {

    return (
        <Navigator

            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",

                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 500 } },
                    close: { animation: 'timing', config: { duration: 500 } },
                },
            }}
        >
            <Screen name='home' component={Home} />
            <Screen name='movies' component={Movies} />
            <Screen name="buscaFilmes" component={BuscaDeFilmes} />
            <Screen name="tvshows" component={TVShows} />
            <Screen name="buscaSeries" component={BuscaDeSeries} />
            <Screen name='buscaFilmesPorGenero' component={BuscaDeFilmesPorGenero} />
            <Screen name='buscaSeriesPorGenero' component={BuscaDeSeriesPorGenero} />
        </Navigator>
    )
} 