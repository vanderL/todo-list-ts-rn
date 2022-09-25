import { ThemeProvider } from 'styled-components'
import { useFonts, Inter_400Regular, Inter_700Bold } from '@expo-google-fonts/inter'
import { StatusBar } from 'expo-status-bar';

import theme from '@theme/index';

import { Home } from './src/screens/Home'

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  })

  return (
    <>
      <ThemeProvider theme={theme}>
        <StatusBar style="light" />

        {fontsLoaded ? < Home /> : null}
      </ThemeProvider>
    </>
  )
}