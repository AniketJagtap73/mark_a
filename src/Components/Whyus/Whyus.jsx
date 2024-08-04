import React from 'react'
import './Whyus.css'
import prog_1 from '../../assets/y2.png'
import prog_2 from '../../assets/y1.png'
import prog_3 from '../../assets/y_3.png'

const Whyus = () => {
  return (
    <div className='programs'>
      <div className="prog">
        <img src={prog_1} alt="" />
      </div>
      <div className="prog">
        <img src={prog_2} alt="" />
      </div>
      <div className="prog">
        <img src={prog_3} alt="" />
      </div>
    </div>
  )
}

export default Whyus