import { useState, useContext } from 'react'
import UserContext from '../components/UserContext';
import React from "react";
import Link from "next/link";
import { IoPersonCircleSharp} from 'react-icons/io5'

const Navbar = () => {
  const [active, setActive] = useState('home')

  const { value } = useContext(UserContext)
  const [ loggedIn, setLoggedIn] = value

    const menu = [
        {
            name: 'home',
            link: '/'
        },
        {
            name: `${loggedIn ? 'Dashboard' : 'login'}`,
            link: '/login'
        }
    ]

  return (
    <nav className="flex justify-around py-4 shadow-md bg-indigo-500 sticky top-0 z-100">
      <h1 className="logo font-bold text-white text-xl">Blog App</h1>
      <ul className="menu flex gap-5">
        {
            menu.map((item, i) => (
                <li onClick={()=> setActive(item.name)} key={i} className={`capitalize text-lg hover:text-white  ${ active == item.name ? 'text-white font-semibold' : 'text-gray-300' } `}>
                    <Link href={item.link}>
                      <a> {item.name} </a>
                    </Link>
                </li>
            ))
        }
        <li>
          {
            loggedIn &&   <IoPersonCircleSharp color='white' size={30} />
          }
         
        </li>
       
      </ul>
    </nav>
  );
};

export default Navbar;
