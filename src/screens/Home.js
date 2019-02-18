import React from 'react'
import { View, Button } from 'react-native'

class Home extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => {
    return {
      title: 'Home',
    }
  }

  render() {
    const { screenProps: { theme }, navigation } = this.props

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button
          title="Go to Count"
          onPress={() => navigation.navigate('Count')}
        />
      </View>
    )
  }
}

export default Home