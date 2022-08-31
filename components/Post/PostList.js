import React, { useState } from 'react'
import {AiFillDelete, AiFillEdit} from 'react-icons/ai'
import Link from 'next/link'
import DeleteDoc from '../DeleteDoc/DeleteDoc';
import axios from 'axios';

const PostList = ({data}) => {

    let i = 1;
    const [open, setOpen] = useState(false)
    const [ item, setItem ] = useState({})

  
    const sendOneItem = (item) => {
        setItem(item)
        setOpen(!open)
    }

    const handleDelete = async(id) => {
        try {
            const res = await axios.delete(`https://mern-crud-blog-app.herokuapp.com/delete/${id}`)
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    }


  return (
    <div className='w-full'>
        <table className='table-auto w-full'>
            <thead className='bg-red-500 text-white w-full p-2 text-center'>
                <tr>
                    <th className='py-3 px-2 text-center'>No.</th>
                    <th>Name</th>
                    <th>Date</th>
                    <th className='py-3 px-2'>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                data && data.map(item => (
                        <tr key={item._id} className='even:bg-slate-200 odd:bg-white p-3 text-center py-5 capitalize'>
                            <td className='py-3 font-semibold'>{i++}</td>
                            <td className='font-semibold'>{item.title}</td>
                            <td>{item.date}</td>
                            <td> 
                                <div className='flex gap-2 justify-center'>
                                    <Link href={`/update/${item._id}`}>
                                        <AiFillEdit className='text-blue-500' size={25} />
                                    </Link>
                                    <AiFillDelete onClick={()=> sendOneItem(item)} className='text-red-500' size={25} />  
                                </div>  
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
        <div className={`${open ? 'block' : 'hidden'}`}>
         <DeleteDoc setOpen={setOpen} handleDelete={handleDelete} item={item} />
        </div>
       
    </div>
  )
}

export default PostList