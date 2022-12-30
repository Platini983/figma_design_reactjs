
import upIcon from '../images/icon-arrow-up.svg'
import downIcon from '../images/icon-arrow-down.svg'
import { useState } from 'react'

const RightNav = ({ open }) =>{
    const [iconShown, setIconShown] = useState(false)
    const [iconShown1, setIconShown1] = useState(false)
    
    return(
        <ul className={open ? 'main-ul' : 'main-ul-sm'}>
                <li className='main-list'><a href='#'>Home</a></li>
                <li className='main-list'><a href='#'>Service</a></li>
                <li className='main-list'
                    onMouseEnter={() => setIconShown1(true)}
                    onMouseLeave={() => setIconShown1(false)}
                >
                    <a href='#'>
                        Company
                        {iconShown1 && <img src={upIcon} alt='drop-down-icon' className='dd-icon'/>}
                        {iconShown1===false && <img src={downIcon} alt='drop-down-icon' className='dd-icon'/>}
                    </a>

                    <ul className='sub-list'>
                        <li><a href='#'>Our Team</a></li>
                        <li><a href='#'>Blog</a></li>
                    </ul>
                </li>
                <li className='main-list'><a href='#'>Contact Us</a></li>
                <li className='main-list'><a href='#'>About Us</a></li>
                
            </ul>          
    )
}

export default RightNav