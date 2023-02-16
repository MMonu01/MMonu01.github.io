import Navbar from "./Components/Navbar"
import Head from './Components/Head'
import About from "./Components/About"
import TechStacks from "./Components/TechStacks"
import Projects from "./Components/Projects"
import Contacts from "./Components/Contacts"
import styles from './Styles/Home.module.css'
import Github from "./Components/Github"

const Home = ()=>{

    return (
        <>

        <Navbar/>
        <Head/>
<About/>
<TechStacks/>
<Projects/>
<Github/>
<Contacts/>
        </>
    )

}

export default Home