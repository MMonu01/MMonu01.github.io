import styles from '../Styles/TechStacks.module.css'


const TechStacks = ()=>{

    return (
        <div id='Skills' className={styles.container}>


<div className={styles.alignHead}>
  <p className={styles.about}>Tech Stacks</p>
 </div>

<div className={styles.content}>

<div className={styles.final}>
<div className={styles.box}>
<img src="../../Html.png" alt="HTML"/>

<div className={styles.child}>
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

</div>
        </div>
    )

}


export default TechStacks