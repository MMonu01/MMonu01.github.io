import styles from '../Styles/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLifeRing,faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-regular-svg-icons'
import { useState } from 'react'
import { RevealWrapper,RevealList } from  'next-reveal'



const Projects = ()=>{



    return (
        <>

        <div className={styles.Boss}>

        <RevealWrapper origin='bottom' reset={false} delay={100} duration={1200} distance='300px' >
        <div id='About' className={styles.projects}>
<span className={styles.name}>About Me</span>
        </div>
</RevealWrapper>



        <div  className={styles.container}>


<div className={`${styles.child} ${styles.child1}`}>



 {/* <div className={styles.box}>   */}
        <RevealList interval={60} origin='left' delay={100} duration={1200} distance='500px' reset={false} className={styles.box} >
<h1 className={styles.head}>Md Monu  </h1>



<div className={styles.content}>

    <p className={styles.intro}> Goal-oriented Web Developer brings strong commitment to
collaboration and solutions-oriented problem-solving. Skilled
in HTML, CSS, Javascript, MERN Stack. Aspired to build best
websites.</p>


    <div class = {styles.alignbtn}>

    <a href='https://github.com/MMonu01'
    className={styles.btn} alt='Md Monu github'><FontAwesomeIcon icon={faGithub}/> Github</a>


    </div>

</div> 
</RevealList>
{/* </div> */}


    <div class={styles.laptop}>
        <RevealWrapper rotate={{x:  150,y:130,z:80}} origin='right' delay={100} duration={1200} distance='500px' reset={false}>
    <img src='../../profile.jpg' alt='profile picture'  />
        </RevealWrapper>
    </div>

    
</div>
        </div>

        </div>
        </>

    )
}


export default Projects