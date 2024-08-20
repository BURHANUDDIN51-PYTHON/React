import React from 'react'

function Button({color, changeColor}) {
  return (
    <>
      <div>
        <button style={{backgroundColor: color}} className='px-4 py-1 rounded-2xl m-2' onClick={() => changeColor(color)}>{color}</button>
      </div>
    </>
  )
}
 
export default Button