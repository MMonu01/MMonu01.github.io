import styles from '../Styles/Contacts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faEnvelope,faXmark } from '@fortawesome/free-solid-svg-icons'
import React,{useRef} from 'react'

import emailjs from '@emailjs/browser';
import { RevealList,RevealWrapper } from 'next-reveal'




const Contacts =()=>{

    const [showAlert,setShowAlert] = React.useState(false)

const HandleShow = ()=>{
    setTimeout(()=>{
        
        setShowAlert(true)
    },[2000])
    setTimeout(()=>{
setShowAlert(false)
    },5000)
}

    const [formData,setFormData] = React.useState({
        name:"",
        email:"",
        subject:"",
        message:""
    })
    



    const HandleFormData = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value})
    }
    
      const sendEmail = (e) => {
        e.preventDefault();
    
    if(formData.name==""){
        console.log("name field is empty")
    }
    else if(formData.email==""){
        console.log("email field is empty")
    }
    else if(formData.subject==""){
        console.log("subject field is empty")
    }
    else if(formData.message==""){
        console.log("message field is empty")
    }
    else{
        HandleShow()

        emailjs.sendForm('service_47717ej', 'template_acl9sk6', e.target, 'stB1zYHgF3S5AGTYk')
        .then((result) => {
            console.log(result.text);
            // alert("Email sent successfully")
            // setShowAlert(true)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    
       
          
      };
    







    return (
        <>

{showAlert && 
          <div className={styles.alert}>
Email Sent Successfully!
<FontAwesomeIcon onClick={()=>{setShowAlert(false)}} style={{float:"right",cursor:"pointer", fontSize:"18px",}} icon={faXmark}/>
        </div>
 } 



         <div id='Contacts' className={styles.projects}>
         <RevealWrapper origin='bottom' delay={100} duration={1000} distance='200px'  >
<span className={styles.name}>Contact Me</span>
</RevealWrapper>
        </div>
        <div  className={styles.container}>
      
    
      <div className={styles.logo}>
     <h2 className={styles.contact}>Contact</h2>
      <RevealList interval={60} origin='left' delay={100} duration={1200} distance='500px' reset={true}  >
     {/* <div> */}


<a   href='https://github.com/MMonu01'>

<div className={styles.log}>
<FontAwesomeIcon icon={faGithub}/>
<span>Github</span>
</div>
</a>
< a   href='https://www.linkedin.com/in/mmonu01/'>

<div className={styles.log}>
    <FontAwesomeIcon icon={faLinkedin}/>
   <span> Linkedin</span>
</div>
</a>
<div className={styles.log}>
    <FontAwesomeIcon icon={faPhone}/>
  <span>  9315238455</span>
</div>
<div className={styles.log}>
    <FontAwesomeIcon icon={faEnvelope}/>
    <span>mdmonu2021@gmail.com</span>
</div> 
</RevealList>
     {/* </div> */}
      </div>
      

<form className={styles.form}  onSubmit={sendEmail}>
<RevealList interval={60} origin='bottom' delay={100} duration={1200} distance='500px' >
    <h2>Message me</h2>
</RevealList>
  
    
      {/* <div className={styles.formField}> */}
      <RevealList interval={60} className={styles.formField} origin='left' delay={100} duration={1200} distance='500px' reset={true} >
        
      <input type="text" name="name" onChange={HandleFormData} placeholder='Name' required/>
      <input type="email" name="email" onChange={HandleFormData} placeholder='Email' required />
      <input type="text" name="subject" onChange={HandleFormData} placeholder='Subject' required/>
      <textarea name="message" onChange={HandleFormData}  placeholder='Message...' required />
      <input type="submit" value="Send message" />
      </RevealList>
      {/* </div> */}
      
    </form>
        </div>
        </>
    )
}


export default Contacts