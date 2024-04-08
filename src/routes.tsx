import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Screens/Home/Home";
import { Movies } from "./Screens/Movies/Movies";
import { TVShows } from "./Screens/TVShows/TVShows";
import { BuscaDeFilmes } from "./Screens/Movies/BuscaFilmes/BuscaDeFilmes";
import { BuscaDeSeries } from "./Screens/TVShows/BuscaDeSeries";
import { BuscaDeFilmesPorGenero } from "./Screens/Movies/BuscaFilmes/BuscaDeFilmesPorGenero";
import { BuscaDeSeriesPorGenero } from "./Screens/TVShows/BuscaDeSeriesPorGenero";
import { ListaFilmes } from "./Screens/ListaFilmes/ListaFilmes";


const { Screen, Navigator } = createStackNavigator();

export function Routes() {

    return (
        <Navigator

            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen name='home' component={Home}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />
            <Screen name='movies' component={Movies}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }} />
            <Screen name="buscaFilmes" component={BuscaDeFilmes}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }} />
            <Screen name="tvshows" component={TVShows}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }} />
            <Screen name="buscaSeries" component={BuscaDeSeries}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }} />
            <Screen name='buscaFilmesPorGenero' component={BuscaDeFilmesPorGenero}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }} />
            <Screen name='buscaSeriesPorGenero' component={BuscaDeSeriesPorGenero}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }} />
            <Screen name='listaFilmes' component={ListaFilmes}
                options={{
                    ...TransitionPresets.SlideFromRightIOS
                }} />
        </Navigator>
    )
} 