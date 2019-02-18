import React from 'react'
import { connect } from "react-redux";
import { View } from 'react-native';

import { Button } from 'react-native-elements'
import TextCenteredSuccess from '../components/UI/TextCenteredSuccess'
import Container from '../components/UI/Container'

class Count extends React.Component {

  static navigationOptions = ({ navigation, screenProps }) => ({
    title: `Count ${navigation.getParam('Undefined', ':]')}`,
    headerStyle: {
      backgroundColor: screenProps.theme.colors.success
    }
  })

  render() {
    const { count, addByOne, addByOneAsync } = this.props

    return (
      <Container>
        <TextCenteredSuccess>The count is: {count}</TextCenteredSuccess>

        <View style={{ flexDirection: "row", flexWrap: "wrap", width: "100%" }}>
          <View style={{ flex: 1 }}>
            <Button title="Add 1" onPress={addByOne} />
          </View>

          <View style={{ flex: 1, marginLeft: 20 }}>
            <Button title="Add 1 Async" onPress={addByOneAsync} />
          </View>
        </View>
      </Container>
    )
  }
}

const mapState = state => ({
  count: state.count
})

const mapDispatch = ({ count: { addBy, addByAsync } }) => ({
  addByOne: () => addBy(1),
  addByOneAsync: () => addByAsync(1),
})

export default connect(mapState, mapDispatch)(Count)