import { Platform } from 'react-native'
import { colors as RNEColors } from 'react-native-elements'

const colors = {
  ...Platform.select({
    default: RNEColors.platform.android,
    ios: RNEColors.platform.ios,
  }),
  backgroundColor: 'lightblue',
  customSuccessColor: '#00ab66'
}

const fontSize = {
  small: 20,
  medium: 40,
  big: 60
}

export default {
  colors,
  fontSize,
  padding: {
    small: 10,
    medium: 30,
    big: 60
  },
  Button: {
    raised: true,
  },
}