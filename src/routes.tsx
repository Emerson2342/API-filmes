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

            screenOptions={{
                headerShown: false,
                gestureEnabled: true,
                gestureDirection: "horizontal",
                cardStyleInterpolator: ({ current }) => ({
                    cardStyle: {
                        opacity: current.progress,
                    },

                }),
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 1000 } },
                    close: { animation: 'timing', config: { duration: 1000 } },
                },
            }}
        >
            <Screen name='home' component={Home} options={{
                animationTypeForReplace: 'push',
            }} />
            <Screen name='movies' component={Movies} options={{
                animationTypeForReplace: 'push',
            }} />
            <Screen name="buscaFilmes" component={BuscaDeFilmes} options={{
                animationTypeForReplace: 'push',
            }} />
            <Screen name="tvshows" component={TVShows} options={{
                animationTypeForReplace: 'push',
            }} />
            <Screen name="buscaSeries" component={BuscaDeSeries} options={{
                animationTypeForReplace: 'push',
            }} />
        </Navigator>
    )
} 