import React, { useContext, useEffect, useState, } from 'react';
import './Home.sass'
import * as AOS from "aos"
import "aos/dist/aos.css";
import bgIMG from "../../assets/images/loginIMG.jpg"
import CalendarySection from '../../components/CalendarySection/CalendarySection';
import userContext from '../../context/userContext';
import Navbar from '../../components/Navbar/Navbar';
import appConfig from '../../config';
import { TurnResponseProvider } from '../../context/turnResponseContext';
import MyTurns from '../../components/MyTurns/MyTurns';
const Home = () => {
  const { user } = useContext<any>(userContext)
  const [myTurnsDiv, setMyTurnsDiv] = useState(false);
  useEffect(() => {
    //delete loader after DOM loaded
    document.getElementById("loader")?.remove()
    AOS.init({
      duration: 600, // values from 0 to 3000, with step 50ms
      easing: 'ease-in-out', // default easing for AOS animations
      once: true,
      offset: 25,
      anchorPlacement: 'bottom-bottom'
    })
  }, [])

  return (
    <main className="Home flex" style={{ backgroundImage: `url(${bgIMG})` }}>
      {user && user?.RoleId === "2" ?
        <>
          <TurnResponseProvider>
            {myTurnsDiv && <MyTurns setModal={setMyTurnsDiv} />}
            <Navbar setModal={setMyTurnsDiv}/>
            <CalendarySection />
          </TurnResponseProvider>
        </>
        : appConfig.onProduction ?
          null :
          <>
            <TurnResponseProvider>
              {myTurnsDiv && <MyTurns setModal={setMyTurnsDiv} />}
              <Navbar setModal={setMyTurnsDiv}/>
              <CalendarySection />
            </TurnResponseProvider>
          </>
      }
    </main>
  )
}
export default Home
