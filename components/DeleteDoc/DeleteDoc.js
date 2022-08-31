import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const DeleteDoc = ({setOpen, handleDelete, item}) => {

    const router = useRouter()

    const deleteDoc =(id) => {
        handleDelete(id)
        setOpen(false)
    }
  
  return (
    <div className='top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed backdrop-blur-lg'>
        <div className="delete-doc w-[400px] text-center h-[200px] bg-white rounded-md shadow-2xl py-5">
           <h4 className='font-bold text-2xl'>Are you sure ?</h4>
           <p className='mt-10 font-semibold'>You want to delete {item.title}</p>
           <div className="buttons mt-5 flex gap-10 justify-center">
                <button onClick={()=> setOpen(false)} className='text-red-500 py-2 px-3 font-bold'>No</button>
                <button onClick={()=> deleteDoc(item._id)} className='text-green-500 py-2 px-3 font-bold'>Yes</button>
           </div>
        </div>
    </div>
  )
}

export default DeleteDoc