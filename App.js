import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ComponentScreen from './src/screens/ComponentsScreen'
import CounterScreen from './src/screens/CounterScreen';
import HomeScreen from './src/screens/HomeScreen'
import ImageScreen from './src/screens/ImageScreen';
import ListScreen from './src/screens/ListScreen';
import ColorScreen from './src/screens/ColorScreen'
import SquareScreen from './src/screens/SquareScreen'
import BoxScreen from './src/screens/BoxScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentScreen,
    List: ListScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'My App',
    },
  }
);

export default createAppContainer(navigator);
