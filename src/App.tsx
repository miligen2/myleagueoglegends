import cerlceLOL from '/CercleLOL.png'
import cercleLoL2 from '/2cer.png'
import axios from 'axios'
import { useState,useEffect } from 'react'
import './App.css'


function App() {

  const API_KEY = 'RGAPI-8c321515-6f43-41c6-a057-3f277453c4bb'
  const PSEUDO = 'Miligen'
  
  const [pseudo, setPseudo] = useState("")

  useEffect(() => {
    getMyName();
  }, []);

  function getMyName() {
    const API_CALL = 'https://euw1.api.riotgames.com/lol/summoner/v4/summoners/by-name/'+ PSEUDO + '?api_key=' + API_KEY;

    axios.get(API_CALL).then(function (response) {
    console.log(response.data)
    setPseudo(response.data)
  }).catch(function (error) {
    console.log(error);
  })
  }


  return ( 
  <>
    <section id=''>
      <div className="presentation">
        <div className="profile">
            <div className="iconeinvocateur">
              <img src="/icone.png" width={150}  alt="" />
              <img src={"http://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/" + pseudo.profileIconId + ".png"} width={125} id='icone' alt="" />
            </div>
            <div className="nomInvocateur">
              <h2>{pseudo.name}</h2>
            </div>
            <div className="lvl">
              <h2>{pseudo.summonerLevel}</h2>
            </div>
        </div>

        <div className="cercles">
          <div className="cercle">
            <img src={cerlceLOL} width="600px" height="600px" alt="" id='groscercle'/>
          </div>
          <div className="cercle2">
            <img src={cercleLoL2} width={480} alt="" />
          </div>
          <div className="détails">
            <h1 className="nomDinvocateur">MILIGEN</h1>
            <h5 className='descInvocateur'>ETERNAL STUDENT</h5>
          </div>
        </div>
        <div className="invisible"></div>
      </div>
    </section>
 </>
  )
}

export default App
