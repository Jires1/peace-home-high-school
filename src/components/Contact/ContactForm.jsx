import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import './contact-form.css'; // Assuming you have a CSS file named contact-form.css


export default function ContactForm () {

  const schoolData = {
    name: 'P.H.C.H.S',
    contactEmail: 'peacehome-school@gmail.com',
    phoneNumber: '+237 6xx xx xx xx',
    address: 'Carrefour Etoug-Ebe, behind La Mama P.O Box 115 Yde',
  };

  return (
    <section className='Contact'>
    <p className='p-title'>Contact Us</p>
    <h2 className='head-title'>Get in touch or reach out through contact form below.</h2>
      <div className='row container'>

        <div className="left">
          <div className="contact-info">
              <h2 className='contact-head'>Contact {schoolData.name}</h2>
              <p>Feel free to reach out through contact form or find our contact information below.</p>

              <ul>
                <li>
                  <span className="contact-label"> <FaEnvelope/> </span> {schoolData.contactEmail}
                </li>
                <li>
                  <span className="contact-label"> <FaPhone/></span> {schoolData.phoneNumber}
                </li>
                <li>
                  <span className="contact-label"> <FaMapMarkerAlt/> </span> {schoolData.address}
                </li>
              </ul>
            </div>
          </div>

        <div className="contact-form right">
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" placeholder="Enter your name" required />
            </div>

            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" placeholder="Enter your mobile number" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="Enter your email id" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Write your messages here</label>
              <textarea id="message" name="message" rows="5" placeholder="Enter your message" required></textarea>
            </div>

            <button className='btn btn-form' type="submit">Submit Now</button>
          </form>
        </div>
      </div>
    </section>
  );
}

