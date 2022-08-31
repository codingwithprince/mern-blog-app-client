import '../styles/globals.css'
import Layout from '../components/Layout'
import { useState } from 'react'
import UserContext from '../components/UserContext'

function MyApp({ Component, pageProps }) {

  const [loggedIn, setLoggedIn] = useState(false)
  
  return <UserContext.Provider value={{ value:[loggedIn, setLoggedIn]}}>
         <Layout>
            <Component {...pageProps} />
         </Layout>
       </UserContext.Provider>
 
}

export default MyApp
