import styles from '../Styles/Head.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { RevealList,RevealWrapper } from 'next-reveal'


const Head = ()=>{

    const OpenResume = ()=>{
        window.open("https://drive.google.com/file/d/11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU/view?usp=share_link")
    }



return (
    <div id='home' className={styles.container}>

<div className={styles.profile}>
<div className={styles.item}>

<RevealList interval={60} className={styles.formField} origin='top' reset={false} delay={100} duration={1200} distance='500px' >
<p className={styles.item1} >Welcome</p>
</RevealList>

<RevealList interval={300} className={styles.formField} origin='left' reset={false} delay={100} duration={1200} distance='350px'>
<p className={styles.item2}>I'm <span>Md Monu</span></p>




    
<p className={styles.item3} >Full Stack Web Developer</p>
</RevealList>




<RevealList interval={60} className={styles.formField} origin='bottom' reset={false} delay={100} duration={1200} distance='500px' >

<a onClick={OpenResume} href='https://drive.google.com/uc?id=11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU&export=download' download="Md-Monu-Resume" className={styles.resume}>
<FontAwesomeIcon reset={false} icon={faDownload}/>
Resume</a>
</RevealList>


</div>
</div>

    </div>
)
}


export default Head