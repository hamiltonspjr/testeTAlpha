import {ThemeProvider} from '@shopify/restyle';
import React from 'react';

import {theme} from './src/theme/theme';
import {Text} from './src/components/Text/Text';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <Text preset="headingLarge" color="carrotSecondary">
          Teste
        </Text>
      </ThemeProvider>
    </SafeAreaProvider>
  );
}

export default App;
