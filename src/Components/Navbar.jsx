import { useState } from 'react'
import Sidebar from './Sidebar'
import styles from '../Styles/Navbar.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faDownload,faChevronUp } from '@fortawesome/free-solid-svg-icons'
import { useEffect } from 'react'

console.log(window.height)

const Navbar =()=>{
   window.onscroll = ()=>{
           if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        let nav =       document.getElementById("navbar")
  let mybutton = document.getElementById("myBtn");
  mybutton.style.display = "block";
     nav.style.padding = "15px 40px";
     nav.style.backgroundColor  = "black"
           document.getElementById("logo").style.fontSize = "24px";
          
        }
        else {
            let nav= document.getElementById("navbar")
            let mybutton = document.getElementById("myBtn");
            mybutton.style.display = "none";
           nav .style.padding = "20px 50px";
           nav.style.backgroundColor = "transparent"
            document.getElementById("logo").style.fontSize = "28px";
          }
    }

    const [show,setShow] = useState(false)

    const Open = ()=>{
        setShow(true)
    }

    const Close = ()=>{
        setShow(false)
    }


    const OpenResume = ()=>{
        window.open("https://drive.google.com/file/d/11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU/view?usp=share_link")
    }



    return (
        <>
        <Sidebar Open = {Open} show={show} Close={Close} />
        <nav id='navbar' className={styles.nav} style={{maxWidth:'1400px',margin:"auto"}}>
            <a href='#home' id='logo' className={styles.logo}>M<span style={{color:"teal"}} id='quanLogo'>M</span></a>



            <div  className={styles.navigation}>
                <a href='#home'>Home</a>
                <a href='#About'>About</a>
                <a href='#Skills'>Skills</a>
                <a href='#projectBox'>Projects</a>
                <a href='#Contacts'>Contact</a>
                <a onClick={OpenResume} href='https://drive.google.com/uc?id=11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU&export=download' download="Md-Monu-Resume" className={styles.resume}>
                    <FontAwesomeIcon icon={faDownload}/>
                     Resume</a>




<FontAwesomeIcon onClick={Open}  className={styles.menu} icon={faBars}/>
            </div>
        </nav>
        </>
    )

}


export default Navbar