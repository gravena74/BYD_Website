import './App.css'

function NavBar() {
  
  return (
    <>
    <div className='nav_bar'>
        <div className='nav_div'>
            <ul className="navMobile">
                <i class="fi fi-br-menu-burger"></i>
            </ul>
            <ul className='things_nav'>
                <li>Details</li>
                <li>Spaces</li>
                <li>Galaxy</li>
            </ul>

            <h1 className='mainTitle'>BYD</h1>

            <ul className='things_nav'>
                <li>Contact</li>
                <li>Customize</li>
            </ul>
        </div>
    </div>
    </>
  )
}

export default NavBar
