import React,{ useEffect,  } from 'react';
import './Home.sass'
import * as AOS from "aos"
import "aos/dist/aos.css";
import bgIMG from "../../assets/images/loginIMG.jpg"
import CalendarySection from '../../components/CalendarySection/CalendarySection';
const Home = ()=>{
  useEffect(()=>{
    //delete loader after DOM loaded
    document.getElementById("loader")?.remove()
    AOS.init({
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true,
      offset: 25,
      anchorPlacement: 'bottom-bottom'
    })
  },[])
  return(
    <main className="Home flex" style={{backgroundImage: `url(${bgIMG})`}}>
      <CalendarySection/>
    </main>
  )
}
export default Home
