import React from 'react'
import { useParams } from 'react-router-dom'

function ItemDetail() {
  const {id} = useParams()

  return (
    <div>
      <h1>Item {Number(id)}</h1>
      <p> Description for Item {id}</p>
    </div>
  )
}

export default ItemDetail