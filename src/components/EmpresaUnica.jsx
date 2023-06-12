import React from 'react'
import { useParams } from 'react-router-dom'

function EmpresaUnica() {
    const {nombre} =useParams()
  return (
    <div>
      {nombre}
    </div>
  )
}

export default EmpresaUnica
