
import desktopImg from '../images/image-hero-desktop.png'
import mobileImg from '../images/image-hero-mobile.png'
import databiz from '../images/client-databiz.svg'
import autophile from '../images/client-audiophile.svg'
import meet from '../images/client-meet.svg'
import maker from '../images/client-maker.svg'

import {useEffect, useState} from 'react'
 
function Main(){
    const imageUrl = window.innerWidth >= 768 ? desktopImg : mobileImg;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, []);


    return(
        <main>
            <img className="main-img" src={imageUrl} alt=""></img>

            <div className="main-content">
                <h1>Best Software Application Management</h1>
                <p>Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
                <div className='main-choice'>
                    <input type='radio' value='Web Development' name='choice' /> Web Development
                    <input type='radio' value='Software Management' name='choice' className='choice_software' /> Software Management
                </div>
                <button className='btn_apply'>Apply Now</button>  <button className='btn_read'>Read More</button>

                <div className='bottom-logos'>
                    <div><img src={databiz} alt=""></img></div>
                    <div><img src={autophile} alt=""></img></div>
                    <div><img src={meet} alt=""></img></div>
                    <div><img src={maker} alt=""></img></div>
                </div>
            </div>
        </main>
    )
}

export default Main