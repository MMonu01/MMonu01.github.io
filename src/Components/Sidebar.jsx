import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import styles from '../Styles/Sidebar.module.css'


const Sidebar = ({Open,Close,show})=>{

    return (<>
       <div style={{width:show?"100%":"0px"}}  className={styles.Sidebar}>
            <FontAwesomeIcon className={styles.mark} onClick={Close} icon={faXmark}/>
            <div className={styles.content}>
            <a href='#home'>Home</a>
             <a href='#About'>About</a>
             <a href='#Skills'>Skills</a>
                <a href='#Projects'>Projects</a>
                <a href='#Contacts'>Contacts</a>
             <a href="https://drive.google.com/file/d/11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU/view?usp=share_link" download="Md-Monu-Resume" className={styles.resume}>Resume</a>
            </div>
            </div>
        
        </>
    )

}


export default Sidebar