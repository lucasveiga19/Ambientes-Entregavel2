import GlobalStyle from '../styles/global'
import {Helmet} from 'react-helmet'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin='' />
        <link href="https://fonts.googleapis.com/css2?family=re:wght@100;200;300;400;500;600;700;800;900&family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet" />
      </Helmet>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
    
  )
}

export default MyApp
