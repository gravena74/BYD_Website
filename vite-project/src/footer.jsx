import './footer.css'

function Footer() {
    const scrollToTop = () => {
        document.querySelector('.mainTitle').scrollIntoView({
          behavior: 'smooth', // Rolagem suave
        });
    }
  return (
    <>
        <footer>
            <div className='mainThings'>
                <div className='ulThingsFooter'>
                    <div>
                        <h1>Navigation</h1>
                        <a>Header</a>
                        <a>Details</a>
                        <a>Specs</a>
                        <a>Gallery <span>(12)</span></a>
                    </div>
                    <div>
                        <h1>Other Pages</h1>
                        <a>Models</a>
                        <a>Shopping Tools</a>
                        <a>Services</a>
                        <a>Experience</a>
                    </div>
                    <div>
                        <h1>Social Media</h1>
                        <a>Website</a>
                        <a>Facebook</a>
                        <a>Twitter</a>
                        <a>Instagram</a>
                    </div>
                </div>
                <div className='newLetter'>
                    <h1>Subcribe to Our Newsletter</h1>
                    <p>Stay up-to-date with the latest BYD news, including tech advancements, product launches, and exciting updates—all delivered straight to your inbox.</p>
                    <div>
                        <input type="text" placeholder='Enter your email..'/>
                        <button className='buttonSubscribe'>Subscribe</button>
                    </div>
                </div>
            </div>
            <div className='footerThings'>
                <div className='footerTerms'>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
                <div>
                    <p className='copyWriter'>2024 - João Gravena</p>
                </div>
                <div className='footerButtons'>
                    <button onClick={scrollToTop}><i class="fi fi-br-angle-up"></i></button>
                </div>
            </div>
        </footer>
    </>
  )
}

export default Footer