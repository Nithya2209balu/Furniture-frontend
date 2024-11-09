import React, { useState } from 'react';
import './Contact.css';
import Last from './Last';
import MyFooter from './MyFooter'

const Contact = () => {
const [formData, setFormData] = useState({
name: '',
email: '',
subject: '',
message: ''
});

const handleChange = (e) => {
const { name, value } = e.target;
setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e) => {
e.preventDefault();
console.log('Form submitted:', formData);
setFormData({ name: '', email: '', subject: '', message: '' });
};

return (
<>

<div className='getin mt-20'>
<h2>Get In Touch With Us</h2>
<p >For more information about our products and services, please feel free to drop us an email. Our staff is always here to help you out. Do not hesitate!</p>
</div>
<div className="contact-container">
<div className="contact-info">
<div className="contact-details">
<div className='address'><strong><h4 className='head-tag1'>Address</h4></strong> <p>236 5th SE Avenue, New York NY10000, United States</p></div>
<div className='phone'><strong><h4 className='head-tag1'>Phone</h4></strong> <p> Mobile: (+84) 546-6789 | Hotline: (+84) 456-6789</p></div>
<div className='working'><strong><h4 className='head-tag1'>Working Time</h4></strong> <p> Monday-Friday: 9:00 - 22:00, Saturday-Sunday: 9:00 - 21:00</p></div>
</div>
</div>

<form className="contact-form" onSubmit={handleSubmit}>
<h4 className='head-tag'>Your name</h4>
<input
type="text"
name="name"
placeholder="Your name"
value={formData.name}
onChange={handleChange}
required
/>
<h4 className='head-tag'>Email address</h4>

<input
type="email"
name="email"
placeholder="Email address"
value={formData.email}
onChange={handleChange}
required
/>
<h4 className='head-tag'>Subject</h4>

<input
type="text"
name="subject"
placeholder="Subject (optional)"
value={formData.subject}
onChange={handleChange}
/>
<h4 className='head-tag'>Message</h4>

<textarea
name="message"
placeholder="Message"
value={formData.message}
onChange={handleChange}
required
></textarea>
<button type="submit">Submit</button>
</form>
</div>
<Last/>
<MyFooter/>
</> 
);
};

export default Contact;