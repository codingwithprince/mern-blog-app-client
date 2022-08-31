import { useState, createContext, useContext, useEffect } from "react";
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from "next/router";
import CreateDoc from '../components/Create/CreateDoc'
import UserContext from "../components/UserContext";
import SpinLoader from "../components/SpinLoader/SpinLoader";

const admin = () => {
    const { value } = useContext(UserContext)
    const [ loggedIn, setLoggedIn] = value
    const router = useRouter()

    useEffect(()=>{

      if(!loggedIn){
        router.push('/login')
      }

    },[])

  return (
    <div>
    <Head>
      <title>Admin</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <main className='px-[5%] md:px-[20%] bg-slate-100'>
      {/* ==== All posts */}
      {
        loggedIn ?  <CreateDoc /> : <SpinLoader />
      }
      
      
    </main>
  </div>
  )
}

export default admin