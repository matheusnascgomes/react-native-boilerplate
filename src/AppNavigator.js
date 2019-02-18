import { 
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer 
} from 'react-navigation'

import HomeScreen from './screens/Home'
import CountScreen from './screens/Count'

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeScreen,
    Count: CountScreen
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator);