import '../styles/globals.css';
import {useState} from 'react'
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  const [themeColor, setThemeColor] = useState('light');
  return(
    <Layout themeColor={themeColor} setThemeColor={setThemeColor}>
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
