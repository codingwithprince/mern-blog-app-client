import React, { useContext} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import UserContext from '../../components/UserContext'
import { AiFillEdit} from 'react-icons/ai'
import {IoPersonCircleSharp, IoShareSocialSharp} from 'react-icons/io5'


const PostCard = ( {data} ) => {

    const { value } = useContext(UserContext)
    const [ loggedIn, setLoggedIn] = value


    const shareHandler = (id) =>{
        if(navigator.share){
            navigator.share({
                text: 'Dekho to',
                url: `https://mern-crud-blog-app.herokuapp.com/update/${id}`
            })
            .then(()=> {
                console.log('Successful');
            })
            .catch(err => console.log(err))
        } else {
            window.alert("Share support kore na")
        }
    }


  return (
    <div id={data._id} className='post-card hover:shadow-lg md:px-[20%] px-3 shadow-md py-5 my-5 bg-white rounded-md'>
        <div className="post-header">
            <h3 className='text-2xl text-center font-semibold text-rose-700 pb-5'>
                {data.title}
            </h3>
            
            <div className="post-img">
                {
                    data.image ? <Image className='' src='' alt='' /> : null
                }
                
            </div>
          
        </div>
        <div className="post-body text-center py-2">
            <p className='whitespace-pre-wrap text-gray-700 md:text-lg text-sm' >
                {data && data.poem.replace(/\\n/g, "\n")}
            </p>
        </div>
        <div className="post-footer flex justify-between items-center gap-2">
            <div className="flex items-center gap-2">
                <div className="writer-img py-5">
                    <IoPersonCircleSharp color='gold' size={50} />
                </div>
                <div className="writer-info">
                    <h3 className="writer-name text-rose-700">{data.writer}</h3>
                    <p className='writer-name text-lime-700'>{data.date}</p>
                </div>
            </div>
            <div className="buttons flex items-center gap-3">
                {
                    loggedIn && <Link href={`/update/${data._id}`}>
                    <AiFillEdit className='text-pink-500' size={25} />
                </Link>
                }
                
                <button className='text-sky-500'>
                    <IoShareSocialSharp size={25} />
                </button>
            </div>
          
          
        </div>
    </div>
  )
}

export default PostCard