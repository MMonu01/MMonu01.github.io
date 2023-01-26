import styles from '../Styles/About.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'


const About = ()=>{

    return (
        <div className={styles.container}>
          <div className={styles.alignHead}>
          <p className={styles.about}>About Me</p>
          </div>



{/* --------------------------- */}

<div className={styles.content}>
    
 <div className={styles.para}>
    <p><span className={styles.name}>I'm Md Monu</span>.</p>
  <p>
  Goal-oriented Web Developer brings strong commitment to
collaboration and solutions-oriented problem-solving. Skilled
in HTML, CSS, Javascript, MERN Stack. Aspired to build best
websites.
  </p>


      <a className={styles.github} href='https://github.com/MMonu01' alt="Github">
    <FontAwesomeIcon icon={faGithub}/>
    Github</a>
</div>


  
 <div className={styles.alignImage}>
 <img src='../../logo.jfif' alt='profile picture'/>
 
 </div>




</div>

{/* --------------------------- */}
        </div>
    )

}


export default About