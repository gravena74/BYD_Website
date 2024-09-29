import { useState } from 'react'
import './section.css'

function UpdateSection() {

  return (
    <>
      <section className='UpdateSection'>
        <div className='buttons_div'>
          <div>
            <button className='buttonUpdates'>UPDATES</button>
          </div>
          <div>
            <p>02/ <span>details</span></p>
          </div>
        </div>
        
        <div className='infos'>
          <div className='infos_title'>
            <h1>Because the biggest challenge is to remain unbeatable.</h1>
          </div>
          <div className='infos_paragrath'>
            <p>Discover the BYD Seal in details</p>
          </div>
          <div className='info_list'>
            <div>
              <h1>Downforce</h1>
              <p>The new BYD Seal redefines electric driving with 
                unparalleled performance and sleek design. 
                Experience cutting-edge technology and advanced 
                features that elevate your journey to new heights.</p>
            </div>
            <div>
              <h1>Comfortable</h1>
              <p>The new BYD Seal combines elegance and power, turning heads on every street. With innovative tech and enhanced performance, it sets a new standard for electric driving.</p>
            </div>
          </div>
        </div>
          
        <div className='mainImagenInfo'>
          <div className='imagen_info'>
              <div className='imagen_box'>
                <h1>"</h1>

                <p>“With its sleek design and advanced technology, the BYD Seal is perfectly aligned with the future of electric mobility, showcasing performance and sophistication at every turn.”</p>

                <ul>
                  <li className='paragrath_name'>----</li>
                </ul>
              </div>
          </div>
        </div>
        

      </section>
    </>
  )
}

export default UpdateSection
