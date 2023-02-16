import styles from '../Styles/Contacts.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faPhone,faEnvelope,faXmark } from '@fortawesome/free-solid-svg-icons'
import React,{useRef} from 'react'

import emailjs from '@emailjs/browser';



const Contacts =()=>{

    const [showAlert,setShowAlert] = React.useState(false)

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
        emailjs.sendForm('service_1jqcath', 'template_z5b8rde', e.target, 'oPB9VV9rxmPp86t_a')
        .then((result) => {
            console.log(result.text);
            // alert("Email sent successfully")
            setShowAlert(true)
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset()
    }
    
       
          
      };
    







    return (
        <>
        
        <div id='Contacts' className={styles.container}>
      
    
      <div className={styles.logo}>

     <h2>Contacts</h2>
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
     {/* </div> */}
      </div>

<form className={styles.form}  onSubmit={sendEmail}>
    <h2>Message me</h2>
    {showAlert && <div className={styles.alert}>
Email Sent Successfully
<FontAwesomeIcon onClick={()=>{setShowAlert(false)}} style={{float:"right",cursor:"pointer", paddingRight:"15px",fontSize:"20px",}} icon={faXmark}/>
        </div>}
    
      <div className={styles.formField}>
        {/* <label>Name</label> */}
      <input type="text" name="name" onChange={HandleFormData} placeholder='Name' required/>
      {/* <label>Email</label> */}
      <input type="email" name="email" onChange={HandleFormData} placeholder='Email' required />
      {/* <label>Subject</label> */}
      <input type="text" name="subject" onChange={HandleFormData} placeholder='Subject' required/>
      {/* <label>Message</label> */}
      <textarea name="message" onChange={HandleFormData}  placeholder='Message...' required />
      <input type="submit" value="Send message" />
      </div>
      
    </form>
        </div>
        </>
    )
}


export default Contacts