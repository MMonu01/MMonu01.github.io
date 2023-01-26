import styles from '../Styles/Head.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const Head = ()=>{

return (
    <div id='home' className={styles.container}>
<div className={styles.profile}>
<div className={styles.item}>
<p>Welcome</p>
<p>I'm Md Monu</p>
<p>Full Stack Web Developer</p>
<a href='https://drive.google.com/uc?id=11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU&export=download' download="Md-Monu-Resume" className={styles.resume}>
<FontAwesomeIcon icon={faDownload}/>
Resume</a>
</div>
</div>

    </div>
)
}


export default Head