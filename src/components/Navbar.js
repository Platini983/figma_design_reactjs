import logo from '../images/logo.svg'
import HamburgerMenu from './HamburgerMenu'

function Navbar() {
    return (
        <nav>
            <div className='left'>
                <img src={logo} alt='' className='logo-img'></img>
            </div>
            <HamburgerMenu />
            <div className='right'>
                <button>Apply Now</button>
            </div>
        </nav>
    )
}

export default Navbar