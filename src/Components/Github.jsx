import styles from '../Styles/Github.module.css'
import React from 'react'
import GitHubCalendar from "react-github-calendar";
import { RevealWrapper,RevealList } from  'next-reveal'


const Github = ()=>{

    return (
        <div className={styles.container}>

             <div className={styles.box}>

            <RevealWrapper  origin='bottom' reset={false} delay={100} duration={1200} distance='100px' >
            <span className={styles.github}>Github Calendar</span>
            </RevealWrapper>
        </div>

        <div className={styles.calendar} >

        <RevealWrapper   delay={100} duration={1200} scale={0} reset={false}>
                  <GitHubCalendar username="mmonu01"  style={{color:"white"}} blockSize={16} fontSize={16} />
                  </RevealWrapper>
        </div>
                  <div style={{marginTop:"50px"}} className={styles.box}>
                    
                  <RevealWrapper  origin='bottom' reset={false} delay={300} duration={1200} distance='100px' >
                  <span className={styles.github}>Github Stats</span>
                  </RevealWrapper>
        </div>


        <div className={styles.streak}>
        <RevealWrapper   delay={100} duration={1200} scale={0} reset={false}>
 <img src="https://github-readme-streak-stats.herokuapp.com/?user=mmonu01&theme=midnight-purple&background=transparent"/>
 </RevealWrapper>
        </div>


        <div className={styles.stats}>
        <RevealWrapper   delay={100} duration={1200} scale={0} reset={false}>
 <img src="https://github-readme-stats.vercel.app/api?username=mmonu01&theme=midnight-purple&show_icons=true"/>
 </RevealWrapper>
        </div>

        </div>
    )
}

export default Github