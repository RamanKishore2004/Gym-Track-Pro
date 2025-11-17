import React from 'react'


export default function Contact(){
return (
<section id="contact" className="section contact-section">
<div className="container contact-inner">
<div className="contact-card">
<h2>Contact & Location</h2>
<p className="muted">Reach out for a tour or to book a session.</p>
<ul className="contact-list">
<li><strong>Phone:</strong> +91 98765 43210</li>
<li><strong>Email:</strong> hello@gymtrackpro.com</li>
<li><strong>Hours:</strong> Mon–Sun • 5:00 AM – 10:00 PM</li>
</ul>
<div className="card-actions">
<a target="_blank" rel="noreferrer" href="https://www.google.com/maps" className="btn primary">Get Directions</a>
</div>
</div>
<div className="map-embed">
<iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.95373531531673!3d-37.817209742021736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d43f3b8bd05%3A0x5045675218ce6e0!2sMelbourne%20VIC%20Australia!5e0!3m2!1sen!2sin!4v1614031234567!5m2!1sen!2sin" width="100%" height="300" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
</div>
</div>
</section>
)
}