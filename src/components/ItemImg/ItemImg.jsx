import React from 'react'

const ItemImg = ({ className, src, alt }) => {
  return (
    <img 
      className={ className } 
      src={ src } 
      alt={ alt } 
    />
  )
}

export default ItemImg