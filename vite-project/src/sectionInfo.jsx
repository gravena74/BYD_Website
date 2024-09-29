import './sectionInfo.css'
import React, {useState} from 'react'

function SectionInfo() {
    // cria um estado para controlar a visivilidade da div
    const [isDivVisible, setIsDivVisible] = useState(false);

    // função para alterar a visibilidade da div
    const handleButtonClick = () =>{
        setIsDivVisible(!isDivVisible); // alterna o valor do estado
    }

  return (
    <>
        <section className='sectionInfo'>
            <div className='headerInfo'>
                <div>
                    <p>03/ <span>specifications</span></p>
                </div>
                <div className='textInfo'>
                    <h2>Discover the BYD Seal in detail</h2>
                </div>
            </div>
            <div className='listInfo'> 
                <div className='info'>
                    <div className='infoThings'>
                        <h2>01</h2>
                        <h1>Aerodynamics and Design</h1>
                        <button><i class="fi fi-br-angle-down"></i></button>
                    </div>
                </div>
                <div className='info'>
                    <div className='infoThings'>
                        <h2>02</h2>
                        <h1>Lightweight Construction</h1>
                        <button><i class="fi fi-br-angle-down"></i></button>
                    </div>
                </div>
                <div className='info'>
                    <div className='infoThings'>
                        <h2>03</h2>
                        <h1>Engine Performance</h1>
                        <button onClick={handleButtonClick}><i class="fi fi-br-angle-down"></i></button>
                    </div>

                    {/* Condicionalmente renderiza a div com base no estado */}

                    {isDivVisible && (

                        <div className='divEnginePerformance'>
                        <div className='imageEnginePerformance'>

                        </div>

                        <div className='mainInfoEnginePerformance'>
                            <div>
                                <button>6-CYLINDER</button>
                            </div>
                            <div className='divInfoEngine'>
                                <h1>As soon as you press the accelerator, the new BYD Seal delivers an impressive performance, dominating the road with power and precision.</h1>
                            </div>
                        </div>

                        <div className="secondInfoEnginePerformance">
                            <div>
                                <div className='engineSpeed'>
                                    <h1>520</h1>
                                    <h3>+</h3>
                                </div>
                                <p>Top Speed (mph)</p>
                            </div>

                            <div>
                                <p>Deliver Maximum Performance</p>
                            </div>

                            <div className='textSecondInfoEngine'>
                                <div className='smallTextInfo'>
                                    <p>531 PS catapult you from 0-100 km/h in 3.8 seconds,
                                    with no time to breathe until reaching a top speed -</p>
                                    <p className='enginePGray'>The electric powertrain ensures a pure and refined driving experience, delivering instant torque and silent acceleration, all the way to its maximum performance.</p>
                                </div>
                                <div>
                                    <button className='buttonLearnMore'>Learn More</button>
                                    <button className='buttonSkip'><i class="fi fi-rr-angle-small-right"></i></button>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}
                </div>
                <div className='info'>
                    <div className='infoThings'>
                        <h2>04</h2>
                        <h1>Interior and Infortainment</h1>
                        <button><i class="fi fi-br-angle-down"></i></button>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default SectionInfo
