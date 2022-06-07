import '../styles/globals.css';
import {useState} from 'react'
import Layout from '../components/layout/layout'
import { UseContextProvider } from "../components/useContext/useContext";

function MyApp({ Component, pageProps }) {
  const [themeColor, setThemeColor] = useState('light');
  return (
    <UseContextProvider>
      <Layout themeColor={themeColor} setThemeColor={setThemeColor}>
        <Component {...pageProps} />
      </Layout>
    </UseContextProvider>
  );
}

export default MyApp
