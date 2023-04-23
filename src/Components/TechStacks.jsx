import styles from '../Styles/TechStacks.module.css'
import { RevealList,RevealWrapper } from 'next-reveal'


const TechStacks = ()=>{

    return (
        <div id='Skills' className={styles.container}>


<div className={styles.alignHead}> 
    <RevealWrapper origin='bottom' delay={100} duration={1000} distance='300px' >

  <p className={styles.about}>Tech Stacks </p>
    </RevealWrapper>
 </div>
{/* <div > */}

<RevealWrapper  className={styles.content}  origin='bottom' delay={100}  duration={1200} distance='100px' reset={true} >

<div className={styles.final}>
<div className={styles.box}>
<img src="../../html.png" alt="HTML"/>

<div className={`${styles.child} ${styles.child1}`}>
    <div>HTML</div>
</div>
</div>
</div>



<div className={styles.final}>

<div className={styles.box}>
    <img src='../../css.png' alt='CSS'/>
  <div className={`${styles.child} ${styles.child2}`}>
  <div>CSS</div>
  </div>
</div>
</div>



<div className={styles.final}>

<div className={styles.box}>
    <img src='../../js.png' alt='JavaScript'/>
    <div className={`${styles.child} ${styles.child3}`}>
<div>JavaScript</div>
    </div>
</div>
</div>



<div className={styles.final}>


<div className={styles.box}>
    <img src='../../ts.jpg' alt='TypeScript'/>
 <div className={`${styles.child} ${styles.child4}`}>
<div>TypeScript</div>
 </div>
</div>
</div>




<div className={styles.final}>

<div className={styles.box}>
<img src='../../react.png' alt='React'/>
<div className={`${styles.child} ${styles.child5}`}>
<div>React</div>
</div>
</div>
</div>

<div className={styles.final}>

<div className={styles.box}>
<img src='../../Redux.png' alt='React'/>
<div className={`${styles.child} ${styles.child5}`}>
<div>Redux</div>
</div>
</div>
</div>




<div className={styles.final}>


<div className={styles.box}>
    <img src="../../nodejs.png" alt="NodeJs" />
<div className={`${styles.child} ${styles.child6}`}>
    <div>NodeJs</div>
</div>
</div>

</div>




<div className={styles.final}>

<div className={styles.box}>
    <img src='../../expressJs.png' alt='ExpressJs'/>
<div className={`${styles.child} ${styles.child7}`}>
<div>ExpressJs</div>
</div>
</div>
</div>





<div className={styles.final}>


<div className={styles.box}>
    <img src='../../mongodb.png' alt='MongoDB'/>
<div className={`${styles.child} ${styles.child8}`}>
<div>MongoDB</div>
</div>
</div>
</div>

</RevealWrapper>
{/* </div> */}
        </div>
    )

}


export default TechStacks