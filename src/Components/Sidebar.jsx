import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons"
import styles from '../Styles/Sidebar.module.css'


const Sidebar = ({Open,Close,show})=>{


    
    const OpenResume = ()=>{
        window.open("https://drive.google.com/file/d/11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU/view?usp=share_link")
    }



    return (<>
       <div style={{width:show?"100%":"0px"}}  className={styles.Sidebar}>
            <FontAwesomeIcon className={styles.mark} onClick={Close} icon={faXmark}/>
            <div className={styles.content}>
            <a onClick={Close} href='#home'>Home</a>
             <a onClick={Close}  href='#About'>About</a>
             <a onClick={Close}  href='#Skills'>Skills</a>
                <a onClick={Close}  href='#projectBox'>Projects</a>
                <a onClick={Close}  href='#Contacts'>Contact</a>
             <a onClick={OpenResume}  href="https://drive.google.com/uc?id=11wLwI3P-ywaIvOsCGf0TOaRKZeStk-gU&export=download" download="Md-Monu-Resume" className={styles.resume}>Resume</a>
            </div>
            </div>
        
        </>
    )

}


export default Sidebar