import styles from '../Styles/TechStacks.module.css'
import { RevealList,RevealWrapper } from 'next-reveal'


const Tools = ()=>{

    return (
        <div id='Skills' className={styles.container}>


<div className={styles.alignHead}>
    <RevealWrapper origin='bottom' delay={100} duration={1000} reset={false} distance='300px'  >

  <p className={styles.about}>Tools </p>
    </RevealWrapper>
 </div>


<RevealList interval={60} origin='bottom' delay={100} duration={1200} distance='100px' reset={false} >

<div className={styles.content}>

<div className={styles.final}>
<div className={styles.box}>
<img src="../../replit.png" alt="Replit"/>

<div className={`${styles.child} ${styles.child1}`}>
    <div>Replit</div>
</div>
</div>
</div>



<div className={styles.final}>

<div className={styles.box}>
    <img src='../../github.png' alt='Github'/>
  <div className={`${styles.child} ${styles.child2}`}  >
  <div>Github</div>
  </div>
</div>
</div>



<div className={styles.final}>

<div className={styles.box}>
    <img src='../../vscode.webp' alt='VSCode'/>
    <div className={`${styles.child} ${styles.child2}`}>
<div>VSCode</div>
    </div>
</div>
</div>


{/* 
<div className={styles.final}>


<div className={styles.box}>
<img src='../../ts.jpg' alt='TypeScript'/>
<div className={`${styles.child} ${styles.child2}`}>
<div>TypeScript</div>
</div>
</div>
</div> */}




<div className={styles.final}>

<div className={styles.box}>
<img src='../../npm.png' alt='NPM'/>
<div className={`${styles.child} ${styles.child5}`}>
<div>NPM</div>
</div>
</div>
</div>

<div className={styles.final}>

<div className={styles.box}>
<img src='../../postman.png' alt='Postman'/>
<div className={`${styles.child} ${styles.child5}`}>
<div>Postman</div>
</div>
</div>
</div>










</div>
</RevealList>
        </div>
    )

}


export default Tools