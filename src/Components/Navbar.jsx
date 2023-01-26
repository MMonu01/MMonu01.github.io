import { useState } from 'react'
import Sidebar from './Sidebar'
import styles from '../Styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faDownload } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

const Navbar =()=>{

   window.onscroll = ()=>{

       if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
           document.getElementById("navbar").style.padding = "15px 40px";
           document.getElementById("logo").style.fontSize = "22px";
        }
        else {
            document.getElementById("navbar").style.padding = "20px 50px";
            document.getElementById("logo").style.fontSize = "24px";
          }
    }

    const [show,setShow] = useState(false)

    const Open = ()=>{
        setShow(true)
    }

    const Close = ()=>{
        setShow(false)
    }


    return (
        <>
        <Sidebar Open = {Open} show={show} Close={Close} />
        <nav id='navbar' className={styles.nav}>
            <a href='#home' id='logo' className={styles.logo}>Md Monu</a>



            <div className={styles.navigation}>
                <a href='#home'>Home</a>
                <a href='#About'>About</a>
                <a href='#Skills'>Skills</a>
                <a href='#Projects'>Projects</a>
                <a href='#Contacts'>Contacts</a>
                <a href='https://drive.google.com/uc?id=11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU&export=download' download="Md-Monu-Resume" className={styles.resume}>
                    <FontAwesomeIcon icon={faDownload}/>
                     Resume</a>




<FontAwesomeIcon onClick={Open}  className={styles.menu} icon={faBars}/>
            </div>
        </nav>
        </>
    )

}


export default Navbar