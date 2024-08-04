import React from 'react'
import './Services.css'
import icons_1 from '../../assets/FB.png'
import icons_2 from '../../assets/dm.png'
import icons_3 from '../../assets/G-ADS.png'
import icons_4 from '../../assets/G-MY-BUSINESS.png'
import icons_5 from '../../assets/INSTA-ADS.png'
import icons_6 from '../../assets/SEO.png'
import icons_7 from '../../assets/WEB-DEVELOPMENT.png'

const Service = () => {
  return (
    <div className="services">
      <div className="i_cons">
       <img src={icons_7} alt="" />
       </div>
       <div className="i_cons">
       <img src={icons_2} alt="" />
       </div>
       <div className="i_cons">
       <img src={icons_6} alt="" />
       </div>
       <div className="i_cons">
       <img src={icons_4} alt="" />
       </div>
       <div className="i_cons">
       <img src={icons_5} alt="" />
       </div>
       <div className="i_cons">
       <img src={icons_3} alt="" />
       </div>
       <div className="i_cons">
       <img src={icons_1} alt="" />
       </div>
      </div>
  )
}

export default Service