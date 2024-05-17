import React from 'react'
import Spin from './spinner.gif'
function Loader() {
  return (
    <div>
      <img src={Spin} className='mx-auto '/>
    </div>
  )
}

export default Loader
