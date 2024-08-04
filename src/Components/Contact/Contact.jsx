import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg.png'
import mail_icon from '../../assets/mail.png'
import phn_icon from '../../assets/phn.jpg'
import addr_icon from '../../assets/addr.jpg'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2619f1ec-c84e-4c6b-ac1e-3f6708d0d24c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
    <div className="contact-col">
        <h3>Send us your details! <img src={msg_icon} alt="" /></h3>
        <p>Reach out to us to make your brand rev!</p>
        <ul>
            <li> <img src={mail_icon} alt="" /> markagenz27@gmail.com</li>
            <li> <img src={phn_icon} alt="" /> +91 9619154954</li>
            <li> <img src={addr_icon} alt="" /> Hiral Triveni, Office No.8 <br/> Mira Road, 401107
            </li>
        </ul>
    </div>
    <div className="contact-col">
        <form onSubmit={onSubmit}>
            <label>Your Name</label>
            <input type="text" name='name' placeholder='Enter your name' 
            required/>
             <label>Your Company Name</label>
            <input type="text" name='Company name' placeholder='Enter your Company name' 
            required/>
            <label>Phone Number</label>
            <input type="tel" name='phone' placeholder='Enter your mobile number' 
            required/>
            <label>Your Email</label>
            <input type="email" name='e-mail' placeholder='Enter your e-mail address' 
            required/>
            <label>Your Requirements</label>
            <textarea name="requirements" rows="6" placeholder='Enter your reqirements' required></textarea>
            <button type='Submit' className='btn dark-btn'>Submit now</button>
        </form>
        <span>{result}</span>
    </div>
    </div>
  )
}

export default Contact