import '../styles/globals.css';
import Layout from '../components/layout/layout'

function MyApp({ Component, pageProps }) {
  return(
    <Layout>
      hi this is inside
    <Component {...pageProps} />
  </Layout>)
}

export default MyApp
