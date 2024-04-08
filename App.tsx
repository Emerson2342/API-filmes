import 'react-native-reanimated';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { ListaProvider } from './src/Hooks/ListProvider';

export default function App() {
  return (
    <ListaProvider>
      <NavigationContainer>
        <Routes
        />
      </NavigationContainer>
    </ListaProvider>
  );
}
