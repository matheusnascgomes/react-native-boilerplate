import React from 'react'
import AppNavigator from './AppNavigator'
import { connect } from "react-redux";

import { ThemeProvider } from 'react-native-elements'
import theme from './styles/theme'

class App extends React.Component {

  handleNavigationStateChange = (prevState, newState, action) => {
    // Monitoring user activity
    // Prevent unauthorized access

    const { routeName } = action
    const { name: userName } = this.props.user

    if (routeName) {
      console.log(`${userName} access the route ${routeName}`)
    }
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppNavigator
          screenProps={{ theme }}
          onNavigationStateChange={this.handleNavigationStateChange}
        />
      </ThemeProvider>
    )
  }
}

const mapState = state => ({
  user: state.user
})

const mapDispatch = ({ user: { setName } }) => ({
  changeUserName: newName => setName(newName)
})

export default connect(mapState, mapDispatch)(App)