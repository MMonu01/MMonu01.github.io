import styles from '../Styles/Head.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Head = ()=>{

    const OpenResume = ()=>{
        window.open("https://drive.google.com/file/d/11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU/view?usp=share_link")
    }



return (
    <div id='home' className={styles.container}>
<div className={styles.profile}>
<div className={styles.item}>
<p>Welcome</p>
<p>I'm <span>Md Monu</span></p>
<p>Full Stack Web Developer</p>
<a onClick={OpenResume} href='https://drive.google.com/uc?id=11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU&export=download' download="Md-Monu-Resume" className={styles.resume}>
<FontAwesomeIcon icon={faDownload}/>
Resume</a>
</div>
</div>

    </div>
)
}


export default Head