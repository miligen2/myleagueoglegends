import cerlceLOL from '/CercleLOL.png'
import cercleLoL2 from '/2cer.png'
import arriereIcone from "/arriereIcone.png";
import cadran from '/Ranked-Emblems-Latest/Tier-Wings/Platinum.png'
import axios from 'axios'



import { useState,useEffect } from 'react'
import './App.css'


function App() {

  const API_KEY = 'RGAPI-3d1612da-878f-43e6-9281-d7352f8fb758'
  const PSEUDO = 'Miligen'
  
  const [pseudo, setPseudo] = useState("")
  const [eloIcone, setEloIcone] = useState([])


  useEffect(() => {
    getMyName();
  }, []);
  useEffect(() => {
    getMyElo();
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

  function getMyElo(){
    const SUMMONERID ="8CrnHcAyVYDZKpnJXWWWiDcCZgBtBZfkpelz4TWU51iTpjg"
    const API_CALL = 'https://euw1.api.riotgames.com/lol/league/v4/entries/by-summoner/'+ SUMMONERID +'?api_key=' + API_KEY;

    axios.get(API_CALL).then(function (response) {
      console.log(response.data)
      setEloIcone(response.data)
    }).catch(function (error) {
    console.log(error);})
  
}
  return ( 
    
    <section id=''>
      <div className="presentation">
        <div className="profile">
          <img src={arriereIcone} id='test' width={320} alt=""  />
          <img src="/icone.png" width={150} id="iconeProfile" alt="" />
          <img src={"http://ddragon.leagueoflegends.com/cdn/13.21.1/img/profileicon/" + pseudo.profileIconId + ".png"} width={125} id='icone' alt="" />
            <div className="infoProfile">
              <div className="nomInvocateur">
                <h3>{pseudo.name}</h3>
              </div>
              <div className="lvl">
                <h6>{pseudo.summonerLevel}</h6>
              </div>
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
          <div className="rank">
              <img src={arriereIcone} width={320}alt="" />
              <select name="" id="selectRank">
                <option value="0"><h1>Solo / Duo</h1></option>
                <option value="1"><h1>Flex</h1></option>
              </select>
   
              <div className="iconeRank">
                <img src="/Ranked-Emblems-Latest/Rank=Silver.png" alt="" width={200} />
              </div>
              <div className="ranked">
                <h4>SILVER II</h4>
              </div>
              <div className="LPRank">
                <h5>20 - LP</h5>
              </div>
          </div>
      </div> 
    </section>

  )
}

export default App
