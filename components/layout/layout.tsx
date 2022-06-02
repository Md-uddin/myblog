import { ReactNode,FC,useState } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme, Navbar } from '@mantine/core';
import {useStyles} from './layout.styles'
import { HeaderResponsive } from "../Header/Header";
import { FooterSimple } from "../footer/Footer";

type Props = {
  name: string;
  children: ReactNode
  themeColor: 'light' | 'dark'
  setThemeColor: any
}

const Layout:FC<Props> = ({children,themeColor,setThemeColor}) => {
  const {classes} = useStyles();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  let links = [
    { link: '/', label: 'home' },
    { link: '/about', label: 'about' },
    { link: '/privacy-policy', label: 'privacy-policy' },
    { link: '/disclaimer', label: 'disclaimer' },
  ];

  return (
    <ColorSchemeProvider colorScheme={themeColor} toggleColorScheme={toggleColorScheme}>
    <MantineProvider
      theme={{
        fontFamily: 'Source Sans Pro, sans-serif',
        spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 },
        colorScheme: 'light',
        colors: {
          // Add your color
          'deep-blue': ['#E9EDFC', '#C1CCF6', '#99ABF0' /* 7 other shades */],
          // or replace default theme color
          blue: ['#E9EDFC', '#C1CCF6', '#99ABF0' /* 7 other shades */],
          },
          breakpoints:{lg:1110,xl:1340},
        // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings: {
    fontFamily:'Arima Madurai, cursive',
    // fontWeight:['fontWeight'],
    sizes: {
    h1: { fontSize:'1.8rem', lineHeight:'1.6rem' },
      h2: { fontSize:'1.2rem', lineHeight:['lineHeight'] },
      h3: { fontSize:[',ontSize'], lineHeight:['lineHeight'] },
      h4: { fontSize:[',ontSize'], lineHeight:['lineHeight'] },
      h5: { fontSize:[',ontSize'], lineHeight:['lineHeight'] },
      h6: { fontSize:[',ontSize'], lineHeight:['lineHeight'] },
    },
  }
    }}
    >
        <div className={classes.wrapper}>
          <HeaderResponsive links={links}/>
        <div className={classes.child}>
          
          {children}
          
          </div>
          <FooterSimple links={links}/>
      </div>
      </MantineProvider>
      </ColorSchemeProvider>
  )
}

export default Layout