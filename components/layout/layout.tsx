import { ReactNode,FC,useState,useContext } from "react";
import { MantineProvider, ColorSchemeProvider, ColorScheme, Navbar, Container } from '@mantine/core';
import {useStyles} from './layout.styles'
import { HeaderResponsive } from "../Header/Header";
import { FooterSimple } from "../footer/Footer";
import { EmailBanner } from "../footer/NewsTeller";
import { TableOfContentsFloating } from "../SideNav/Sidebar";
import {UseContext} from '../useContext/useContext'
type Props = {
  name: string;
  children: ReactNode
  themeColor: 'light' | 'dark'
  setThemeColor: any
}

const Layout:FC<Props> = ({children,themeColor,setThemeColor}) => {
  const {classes} = useStyles();
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const props = useContext(UseContext);
  console.log(props);
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  let links = [
    { link: '/', label: 'home' },
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
          primaryColor: ['#cc5de8'],
          // secondaryColor:l

          },
          breakpoints: { lg: 1110, xl: 1100 },
        // h1-h6 styles, used in Title and TypographyStylesProvider components
  headings: {
    fontFamily:'Arima Madurai, cursive',
    // fontWeight:['fontWeight'],
    fontWeight: '600',
    sizes: {
    h1: { fontSize:'2.5rem', lineHeight:'2.8rem',wordSpacing:5,letterSpacing:1},
      h2: { fontSize:'2rem', lineHeight:'2.2rem',wordSpacing:5,letterSpacing:1,margin:'1rem 0'},
      h3: { fontSize:'1.8rem', lineHeight:'2rem',wordSpacing:5,letterSpacing:1},
      h4: { fontSize:'1.5rem', lineHeight:'1.8rem',wordSpacing:5,letterSpacing:1},
      h5: { fontSize:'1.2rem', lineHeight:'1.5rem',wordSpacing:5,letterSpacing:1},
      h6: { fontSize:'1rem', lineHeight:'1.2rem',wordSpacing:5,letterSpacing:1},
    },
  }
    }}
    >
        <main className={classes.wrapper}>
          <HeaderResponsive links={links}/>
          <div className={classes.child}>
            <aside className={classes.sidebar}>
              <TableOfContentsFloating links={
                [
                  { link: '#content', label: 'content',order:1 },
                  { link: '#about', label: 'about',order:2 },
                  { link: '#privacy-policy', label: 'privacy-policy',order:1 },
                  { link: '#third-title', label: 'third-title', order: 2 },
                  { link: '#', label: 'home',order:1 },
                ]
              } />
            </aside>
            <Container className={classes.main} >
              
          {children}
          </Container>
          
          </div>
      </main>
          {/* <EmailBanner /> */}
          <FooterSimple links={links}/>
      </MantineProvider>
      </ColorSchemeProvider>
  )
}

export default Layout