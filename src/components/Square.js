import React, { useCallback, useState } from 'react'
import './Square.css'
function Square({value,handleclick}) {

  return (
    <div>
      <button className='Square' onClick={handleclick}>{value}</button>
    </div>
  )
}

export default Square
