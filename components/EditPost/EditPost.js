import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import SpinLoader from '../SpinLoader/SpinLoader';

const EditPost = () => {

  const [post, setPost] = useState()
  const router = useRouter()

    useEffect(()=>{
      axios.get(`https://mern-crud-blog-app.herokuapp.com/update/${router.query.id}`)
      .then(res => setPost(res.data))
      .catch(error => console.log(error))
    },[])


    const updatePost = async(id) => {
      try {
        await axios.put(`https://mern-crud-blog-app.herokuapp.com/update/${id}`, post)
        console.log("Updated");
      } catch (error) {
        console.log(error);
      }
    }
  
    const handleUpdate = (e) =>{
      e.preventDefault()
      updatePost(router.query.id)
      router.push('/')
    }


    const onBlurHandler = (e) => {
      e.preventDefault()
      setPost({
        ...post,
        [e.target.name] :  e.target.value
      })
   }


  return (
        <div className='py-10 bg-white p-5'>
        <h3 className='text-center text-2xl text-gray-700'>Edit a Post</h3>
        <div className="form md:px-[30%]">
          {
            post == null ? <SpinLoader /> :
           <form>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' htmlFor='title'>Title</label>
                    <input onChange={(e)=> onBlurHandler(e)} value={post.title} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="title" id="title"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' htmlFor='writer'>Writer</label>
                    <input  onChange={(e)=> onBlurHandler(e)} value={post.writer} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="writer" id="writer"  required/>
                </div>
                <div className='flex flex-col py-2'>
                    <label className='py-2 text-gray-400 font-semibold' htmlFor='poem'>Poem</label>
                    <textarea value={post.poem}  onChange={(e)=> onBlurHandler(e)} rows={7} className='shadow-md py-3 px-2 rounded-md border-2 border-red-300 focus:outline-sky-500' type="text" name="poem" id="poem"  required/>
                </div>
                <div className="flex flex-col pt-3">
                    <button onClick={(e)=> handleUpdate(e)} className='py-2 px-3 rounded-md bg-red-500 text-white'>Update</button>
                </div>
            </form>
             }
        </div>
    </div>
  )
}

export default EditPost