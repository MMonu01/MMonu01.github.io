import Navbar from "./Components/Navbar"
import Head from './Components/Head'
import About from "./Components/About"
import TechStacks from "./Components/TechStacks"
import Projects from "./Components/Projects"
import Contacts from "./Components/Contacts"
import styles from './Styles/Home.module.css'
import Github from "./Components/Github"
import Tools from "./Components/Tools"

const Home = ()=>{

    return (
        <>

        <Navbar/>
        <Head/>
<About/>
<TechStacks/>
<Tools/>
<Projects/>
<Github/>
<Contacts/>
        </>
    )

}

export default Home