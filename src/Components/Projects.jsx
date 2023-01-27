import styles from '../Styles/Projects.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLifeRing } from '@fortawesome/free-solid-svg-icons'

const Projects = ()=>{

    return (
        <div id='Projects' className={styles.container}>

<div className={`${styles.child} ${styles.child1}`}>

    <div class={styles.laptop}>
    <iframe src="https://bloommedplus.vercel.app/" style={{width:"100%",border:"none",height:"100%"}} />
</div>



 <div className={styles.box}>  
<h1 className={styles.head}>Bloommedplus  </h1>



<div className={styles.content}>

    <p className={styles.intro}>Bloommedplus is a healthcare platform {`( Tata 1mg Clone )`}.</p>

    <p className={styles.feature}><span style={{width:"120px",display:"block"}}>Feature:</span> <span>Signup | Login | Logout | Sorting
| Pagination | Cart functionality | Place order | customer details | track order</span></p>

<p className={styles.feature}><span >Tech Stacks:</span> <span>
HTML | CSS | JavaScript | React | JSON server</span></p>

    <div class = {styles.alignbtn}>

    <a href='https://github.com/MMonu01/bloommedplus'
    className={styles.btn} alt='bloommedplus github'><FontAwesomeIcon icon={faGithub}/> Github</a>


    <a href='https://bloommedplus.vercel.app/' className={styles.btn} alt='bloommedplus website'>
        <FontAwesomeIcon icon={faLifeRing}/> Live Site</a>
    </div>

</div> 
</div>
</div>

{/* --------------------------------------------------- */}



<div className={`${styles.child} ${styles.child2}`}>


<div class={styles.laptop}>
    <iframe src="https://lumen5-beta.vercel.app/index.html" style={{width:"100%",border:"none",height:"100%"}} />
</div>



 <div className={styles.box}>  
<h1 className={styles.head}>Lumen5 Clone  </h1>



<div className={styles.content}>

    <p className={styles.intro}>Lumen5 is a video creation software that helps marketers, publishers, and brands create video content in a breeze, without any technical expertise.</p>

    <p className={styles.feature}><span >Feature:</span> <span>Signup | Login | Users database in local storage</span></p>

<p className={styles.feature}><span >Tech Stacks:</span> <span>
HTML | CSS | JavaScript</span></p>

    <div class = {styles.alignbtn}>

    <a href='https://github.com/MMonu01/lumen5-clone'
    className={styles.btn} alt='Lumen5 github'><FontAwesomeIcon icon={faGithub}/> Github</a>


    <a href='https://lumen5-beta.vercel.app/index.html' className={styles.btn} alt='Lumen5 website'>
        <FontAwesomeIcon icon={faLifeRing}/> Live Site</a>
    </div>

</div> 
</div>

</div>



{/* ------------------------------------------------------- */}











<div className={`${styles.child} ${styles.child3}`}>


<div class={styles.laptop}>
    <iframe src="https://redrstore.vercel.app/" style={{width:"100%",border:"none",height:"100%"}} />
</div>



 <div className={styles.box}>  
<h1 className={styles.head}>Redr Store  </h1>



<div className={styles.content}>

    <p className={styles.intro}>Redr Store is an online grocery super market {`( Bigbasket Clone )`}.</p>

    <p className={styles.feature}><span >Feature:</span> <span>Signup/Login | Search engine | Sorting |
Change quantity | Add to cart</span></p>

<p className={styles.feature}><span >Tech Stacks:</span> <span>
HTML | CSS | JavaScript | React</span></p>

    <div class = {styles.alignbtn}>

    <a href='https://github.com/MMonu01/Redr-Store'
    className={styles.btn} alt='Redr Store github'><FontAwesomeIcon icon={faGithub}/> Github</a>


    <a href='https://redrstore.vercel.app/' className={styles.btn} alt='bloommedplus website'>
        <FontAwesomeIcon icon={faLifeRing}/> Live Site</a>
    </div>

</div> 
</div>
</div>


{/* -------------------------------------------- */}






{/* 
<div className={`${styles.child} ${styles.child4}`}>
    

<div class={styles.laptop}>
    <iframe src="https://bloommedplus.vercel.app/" style={{width:"100%",border:"none",height:"100%"}} />
</div>



 <div className={styles.box}>  
<h1 className={styles.head}>Bloommedplus  </h1>



<div className={styles.content}>

    <p className={styles.intro}>Bloommedplus is a healthcare platform {`( Tata 1mg clone )`}.</p>

    <p className={styles.feature}><span >Feature:</span> <span>Signup | Login | Logout | Sorting
| Pagination | Cart functinality | Place order | customer details | track order</span></p>

<p className={styles.feature}><span >Tech Stacks:</span> <span>
HTML | CSS | JavaScript | React | JSON server</span></p>

    <div class = {styles.alignbtn}>

    <a href='https://github.com/MMonu01/bloommedplus'
    className={styles.btn} alt='bloommedplus github'><FontAwesomeIcon icon={faGithub}/> Github</a>


    <a href='https://bloommedplus.vercel.app/' className={styles.btn} alt='bloommedplus website'>
        <FontAwesomeIcon icon={faLifeRing}/> Live Site</a>
    </div>

</div> 
</div>
</div> */}
        </div>
    )
}


export default Projects