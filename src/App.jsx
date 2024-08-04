import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Back from './Components/Back/Back'
import Whyus from './Components/Whyus/Whyus'
import Title from './Components/Title/Title'
import Services from './Components/Services/Services'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Back/>
      <Title/>
      <Whyus/>
      <div className='title'>
        <p>SERVICES</p>
      </div>
    <Services/>
    <div className='title'>
        <p>CONTACT US</p>
      </div>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App