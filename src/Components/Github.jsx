import styles from '../Styles/Github.module.css'
import React from 'react'
import GitHubCalendar from "react-github-calendar";

const Github = ()=>{

    return (
        <div className={styles.container}>
             <div className={styles.box}>

            <span className={styles.github}>Github Calendar</span>
        </div>

        <div className={styles.calendar} >

                  <GitHubCalendar username="mmonu01"  style={{color:"white"}} blockSize={16} fontSize={16} />
        </div>
                  <div style={{marginTop:"50px"}} className={styles.box}>
                  <span className={styles.github}>Github Stats</span>
        </div>


        <div className={styles.streak}>

 <img src="https://github-readme-streak-stats.herokuapp.com/?user=mmonu01&theme=midnight-purple&background=transparent"/>
        </div>
        <div className={styles.stats}>

 <img src="https://github-readme-stats.vercel.app/api?username=mmonu01&theme=midnight-purple&show_icons=true"/>
        </div>
        </div>
    )
}

export default Github