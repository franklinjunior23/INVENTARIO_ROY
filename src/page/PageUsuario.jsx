import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function PageUsuario() {
    const {id}=useParams()
    const volver=useNavigate() 
    console.log(id)
  return (
   <section>
    <div className='flex w-full'>
    <button type="button" className='bg-orange-300 py-2 px-4' onClick={()=>{volver(-1)}}>Volver Atras </button>
        
    </div>
   </section>
  )
}

export default PageUsuario
