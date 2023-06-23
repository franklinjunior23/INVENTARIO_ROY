import React from 'react'
import { useParams } from 'react-router-dom'

function PageSelecCateg() {
   const Catgory = useParams().category
   console.log(Catgory)
  return (
    <div>
      
    </div>
  )
}

export default PageSelecCateg
