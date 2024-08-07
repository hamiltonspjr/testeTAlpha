import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {Text} from 'react-native';

import {theme} from './src/theme/theme';

function App(): React.JSX.Element {
  return (
    <ThemeProvider theme={theme}>
      <Text style={{color: theme.colors.primary}}>teste</Text>
    </ThemeProvider>
  );
}

export default App;
