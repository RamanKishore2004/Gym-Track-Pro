import React from 'react'
import g1 from '../assets/images/G1.jpg'
import g2 from '../assets/images/G2.jpg'
import g3 from '../assets/images/G3.jpg'

const localGallery = [g1, g2, g3]

export default function Gallery(){
  return (
    <section id="gallery" className="section alt">
      <div className="container">
        <h2 className="section-title"> Highlights</h2>
        <div className="gallery-grid">
          {localGallery.map((src,i)=>(
            <div key={i} className="gallery-item">
              <img src={src} alt={`gallery-${i}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
