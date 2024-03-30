import { TransitionPresets, createStackNavigator } from "@react-navigation/stack";
import { Home } from "./Screens/Home/Home";
import { Movies } from "./Screens/Movies/Movies";
import { TVShows } from "./Screens/TVShows/TVShows";


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
                name="tvshows"
                component={TVShows}
                options={{
                    headerShown: false,
                    ...TransitionPresets.SlideFromRightIOS
                }}
            />

        </Navigator>
    )
} 