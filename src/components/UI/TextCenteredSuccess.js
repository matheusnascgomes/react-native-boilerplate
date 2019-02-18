import React from 'react'
import { Text } from 'react-native'
import { withTheme } from 'react-native-elements'

const TextCenteredSuccess = ({ theme, updateTheme, children }) => {
  return <Text style={{
    color: theme.colors.customSuccessColor,
    fontSize: theme.fontSize.big,
    textAlign: "center",
  }}>
    {children}
  </Text>;
}

export default withTheme(TextCenteredSuccess)