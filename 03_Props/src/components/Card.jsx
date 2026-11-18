import React from 'react'

const Card = ({title, description, price}) => {
  return (
    <div className='card'>
        <h1> {title} </h1>
        <h2> {description} </h2>
        <h2> {price} </h2>
    </div>
  )
}

export default Card