import { useState } from 'react'
import './App.css'

function App(){
  const scrollToSection = () => {
    document.querySelector('.buttonUpdates').scrollIntoView({
      behavior: 'smooth', // Rolagem suave
    });
  }

  return (
    <>
      <main className='primary_page'>
        <div className='main_things'>
          <div className='title'>
            <div>
              <h1>The journey to a Pefection</h1>
            </div>
          </div>
          <div className='second_title'>
            <div>
              <h1>Top performance requires more than perfect conditions especially just luck.</h1>
            </div>
          </div>
          <div className='main_footer'>
            <div>
              <div>
                <h3>06/homepage</h3>
              </div>
              <div>
                <h3 className='experienceTitle'>Experience the new BYD Seal like never before</h3>
              </div>
              <div className='buttonMain'>
                <div>
                  <button className='buttonPointScrollDown' onClick={scrollToSection}><i class="fi fi-br-angle-down"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
