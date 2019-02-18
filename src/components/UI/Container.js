import React from 'react'
import { View } from 'react-native'
import { withTheme } from 'react-native-elements'

const Container = ({ theme, children }) => (
  <View style={{ 
    flex: 1,
    backgroundColor: theme.colors.background,
    padding: theme.padding.small,
  }}>
    {children}
  </View>
)

export default withTheme(Container)