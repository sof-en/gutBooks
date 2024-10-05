// theme.ts

import { extendTheme, ThemeConfig, type StyleFunctionProps } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

// 3. Define your custom color modes
const customColors = {
  light: {
    bg: '#f0e7db', // light mode background color
    // color: '#2d3748', // light mode text color
  },
  dark: {
    bg: '#08090a', // dark mode background color
    // color: '#ffffff', // dark mode text color
  },
}

// 4. Extend the theme
export const theme = extendTheme({
  config,
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: customColors[props.colorMode].bg,
        // color: customColors[props.colorMode].color,
      },
    }),
  },
})
